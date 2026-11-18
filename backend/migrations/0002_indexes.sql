-- Feloosy API indexes (additive only, no data changes).
-- Audit of every query in backend/src (index.ts + google.ts):
--   users.email ............ covered by the UNIQUE constraint on users(email)
--   users.google_sub ....... covered by idx_users_google_sub
--   users.id ............... primary key
--   sessions.token_hash .... primary key (the expires_at predicate is a one-row filter)
--   sessions.user_id ....... covered by idx_sessions_user
--   progress.user_id ....... primary key
--   oauth_states.state ..... primary key
-- These two are the only access patterns without coverage: both tables collect
-- expired rows forever (no cleanup query exists yet), and expiry sweeps plus the
-- expires_at filter in session validation need an index as row counts grow.

CREATE INDEX IF NOT EXISTS idx_sessions_expires ON sessions(expires_at);
CREATE INDEX IF NOT EXISTS idx_oauth_states_expires ON oauth_states(expires_at);
