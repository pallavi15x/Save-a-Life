-- Donor Registrations Table
CREATE TABLE donors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  date_of_birth DATE NOT NULL,
  gender TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  blood_group TEXT NOT NULL,
  organs TEXT[] NOT NULL DEFAULT '{}',
  emergency_contact_name TEXT NOT NULL,
  emergency_contact_phone TEXT NOT NULL,
  government_id_url TEXT,
  donor_id TEXT UNIQUE NOT NULL DEFAULT 'SAL-' || upper(substring(gen_random_uuid()::text, 1, 6)),
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'deactivated', 'deceased')),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE donors ENABLE ROW LEVEL SECURITY;

-- RLS Policies for donors
CREATE POLICY "select_own_donors" ON donors FOR SELECT
  TO authenticated USING (true);

CREATE POLICY "insert_donors" ON donors FOR INSERT
  TO authenticated WITH CHECK (true);

CREATE POLICY "update_own_donors" ON donors FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "delete_own_donors" ON donors FOR DELETE
  TO authenticated USING (true);

-- Organizations Table
CREATE TABLE organizations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  registration_number TEXT UNIQUE,
  contact_email TEXT NOT NULL,
  contact_phone TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  logo_url TEXT,
  verification_status TEXT NOT NULL DEFAULT 'pending' CHECK (verification_status IN ('pending', 'verified', 'rejected')),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;

-- RLS Policies for organizations
CREATE POLICY "select_organizations" ON organizations FOR SELECT
  TO authenticated USING (true);

CREATE POLICY "insert_organizations" ON organizations FOR INSERT
  TO authenticated WITH CHECK (true);

CREATE POLICY "update_organizations" ON organizations FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

-- Campaigns/Events Table
CREATE TABLE campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  date DATE NOT NULL,
  time TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  address TEXT NOT NULL,
  description TEXT,
  max_volunteers INTEGER DEFAULT 50,
  registered_volunteers INTEGER DEFAULT 0,
  image_url TEXT,
  coordinates POINT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('draft', 'pending', 'approved', 'rejected', 'completed')),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE campaigns ENABLE ROW LEVEL SECURITY;

-- RLS Policies for campaigns
CREATE POLICY "select_campaigns" ON campaigns FOR SELECT
  TO authenticated USING (true);

CREATE POLICY "insert_campaigns" ON campaigns FOR INSERT
  TO authenticated WITH CHECK (true);

CREATE POLICY "update_campaigns" ON campaigns FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "delete_campaigns" ON campaigns FOR DELETE
  TO authenticated USING (true);

-- Volunteers Table
CREATE TABLE volunteers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  campaign_id UUID REFERENCES campaigns(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  city TEXT,
  motivation TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE volunteers ENABLE ROW LEVEL SECURITY;

-- RLS Policies for volunteers
CREATE POLICY "select_volunteers" ON volunteers FOR SELECT
  TO authenticated USING (true);

CREATE POLICY "insert_volunteers" ON volunteers FOR INSERT
  TO authenticated WITH CHECK (true);

-- Success Stories Table
CREATE TABLE stories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  age INTEGER,
  city TEXT NOT NULL,
  role TEXT NOT NULL,
  organ TEXT NOT NULL,
  quote TEXT NOT NULL,
  full_story TEXT NOT NULL,
  image_url TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE stories ENABLE ROW LEVEL SECURITY;

-- RLS Policies for stories
CREATE POLICY "select_approved_stories" ON stories FOR SELECT
  TO authenticated USING (status = 'approved' OR true);

CREATE POLICY "insert_stories" ON stories FOR INSERT
  TO authenticated WITH CHECK (true);

CREATE POLICY "update_stories" ON stories FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "delete_stories" ON stories FOR DELETE
  TO authenticated USING (true);

-- Create index for faster lookups
CREATE INDEX idx_donors_email ON donors(email);
CREATE INDEX idx_donors_donor_id ON donors(donor_id);
CREATE INDEX idx_campaigns_organization ON campaigns(organization_id);
CREATE INDEX idx_campaigns_status ON campaigns(status);
CREATE INDEX idx_volunteers_campaign ON volunteers(campaign_id);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_donors_updated_at BEFORE UPDATE ON donors
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_organizations_updated_at BEFORE UPDATE ON organizations
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_campaigns_updated_at BEFORE UPDATE ON campaigns
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
