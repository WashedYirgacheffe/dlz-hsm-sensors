-- Inquiry table for HSM Sensors.
--
-- Run this in the Supabase SQL editor. Row Level Security is enabled with no
-- policies: the site reaches this table with the service-role key from a
-- server route handler only, so a leaked anon key cannot read enquiries.
-- The service role bypasses RLS, which is the intended path.

create table if not exists public.inquiries (
  id           uuid primary key,
  created_at   timestamptz not null default now(),
  name         text        not null check (char_length(name) between 1 and 80),
  company      text        not null check (char_length(company) between 1 and 120),
  email        text        not null check (char_length(email) between 3 and 160),
  country      text        not null default '',
  phone        text        not null default '',
  intent       text        not null check (intent in ('quote','custom','datasheet','support','other')),
  model        text        not null default '',
  category     text        not null default '',
  quantity     text        not null default '',
  message      text        not null check (char_length(message) between 1 and 4000),
  source_ip    text        not null default '',
  user_agent   text        not null default '',
  status       text        not null default 'new'
                           check (status in ('new','replied','quoted','closed','spam'))
);

-- The admin list reads newest-first.
create index if not exists inquiries_created_at_idx
  on public.inquiries (created_at desc);

-- Status filtering and the unread count.
create index if not exists inquiries_status_idx
  on public.inquiries (status, created_at desc);

alter table public.inquiries enable row level security;

-- No policies on purpose. Only the service-role key (server side) may read
-- or write. If you ever add a public dashboard, add a narrow policy here
-- rather than disabling RLS.

comment on table public.inquiries is
  'Inbound RFQ and contact submissions from the public site.';
