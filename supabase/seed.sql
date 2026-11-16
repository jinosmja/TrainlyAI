-- ==============================================================================
-- TrainlyAI — Development Seed Data
-- Platform: Supabase PostgreSQL 15+
-- NOTICE: For development and testing environments only.
-- ==============================================================================

-- ==============================================================================
-- 1. Seed Categories
-- ==============================================================================

INSERT INTO job_categories (id, name, slug, description, icon_name, display_order, is_active)
VALUES
  ('c1000000-0000-0000-0000-000000000001', 'General AI Training', 'ai-training', 'Train frontier LLMs and reasoning models across multimodal tasks.', 'Sparkles', 1, true),
  ('c1000000-0000-0000-0000-000000000002', 'AI Evaluation & Graders', 'ai-evaluation', 'Evaluate AI model outputs for truthfulness, safety, and coherence.', 'CheckCircle2', 2, true),
  ('c1000000-0000-0000-0000-000000000003', 'Coding & Software Specialists', 'coding-software', 'Code generation, debugging, and synthetic code benchmark creation.', 'Code', 3, true),
  ('c1000000-0000-0000-0000-000000000004', 'Writing & Editorial Review', 'writing-editing', 'High-quality synthetic prose, creative prompts, and text editing.', 'PenTool', 4, true),
  ('c1000000-0000-0000-0000-000000000005', 'Mathematics & Science Experts', 'math-science', 'Step-by-step mathematical reasoning and scientific verification.', 'Brain', 5, true),
  ('c1000000-0000-0000-0000-000000000006', 'Language & Translation', 'language-translation', 'Localization, bilingual QA, and low-resource dialect evaluation.', 'Languages', 6, true),
  ('c1000000-0000-0000-0000-000000000007', 'Multimodal Data Annotation', 'data-annotation', 'Annotate image, bounding boxes, video, and tabular data.', 'Layers', 7, true),
  ('c1000000-0000-0000-0000-000000000008', 'Audio & Speech Evaluation', 'audio-speech', 'Voice transcription, phonetic alignment, and accent grading.', 'Volume2', 8, true),
  ('c1000000-0000-0000-0000-000000000009', 'Subject-Matter Experts (SME)', 'subject-matter-experts', 'Law, medicine, finance, and specialized domain expertise.', 'Award', 9, true),
  ('c1000000-0000-0000-0000-000000000010', 'AI Safety & Alignment (RLHF)', 'ai-safety-rlhf', 'Reinforcement learning from human feedback and red-teaming.', 'ShieldAlert', 10, true)
ON CONFLICT (slug) DO UPDATE
SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  icon_name = EXCLUDED.icon_name,
  display_order = EXCLUDED.display_order;

-- ==============================================================================
-- 2. Seed Platforms
-- ==============================================================================

INSERT INTO platforms (id, name, slug, website_url, logo_url, description, is_active, default_referral_url, allowed_domains, referral_program_status, referral_terms_checked_at)
VALUES
  (
    'p1000000-0000-0000-0000-000000000001',
    'DataAnnotation',
    'dataannotation',
    'https://dataannotation.tech',
    '/logos/dataannotation.svg',
    'Premier remote AI training platform offering coding, evaluation, and creative writing projects with flexible hourly pay.',
    true,
    'https://dataannotation.tech/?ref=trainlyai',
    ARRAY['dataannotation.tech', 'www.dataannotation.tech'],
    'active',
    NOW()
  ),
  (
    'p1000000-0000-0000-0000-000000000002',
    'Outlier',
    'outlier',
    'https://outlier.ai',
    '/logos/outlier.svg',
    'AI training platform connecting global subject-matter experts in STEM, coding, and humanities to frontier model labs.',
    true,
    'https://outlier.ai/?referral=trainlyai',
    ARRAY['outlier.ai', 'app.outlier.ai'],
    'active',
    NOW()
  ),
  (
    'p1000000-0000-0000-0000-000000000003',
    'Mercor',
    'mercor',
    'https://mercor.com',
    '/logos/mercor.svg',
    'Global AI talent marketplace featuring fully remote engineering, generalist evaluator, and research contracts.',
    true,
    'https://mercor.com/?ref=trainlyai',
    ARRAY['mercor.com', 'jobs.mercor.com'],
    'active',
    NOW()
  ),
  (
    'p1000000-0000-0000-0000-000000000004',
    'Alignerr',
    'alignerr',
    'https://alignerr.com',
    '/logos/alignerr.svg',
    'Curated community for subject-matter experts to align and evaluate state-of-the-art language models with prompt engineering.',
    true,
    'https://alignerr.com/careers',
    ARRAY['alignerr.com', 'app.alignerr.com'],
    'active',
    NOW()
  ),
  (
    'p1000000-0000-0000-0000-000000000005',
    'Mindrift',
    'mindrift',
    'https://mindrift.ai',
    '/logos/mindrift.svg',
    'Global AI training agency recruiting freelance AI writers, editors, and domain specialists across dozens of languages.',
    true,
    'https://mindrift.ai/jobs',
    ARRAY['mindrift.ai', 'careers.mindrift.ai'],
    'active',
    NOW()
  ),
  (
    'p1000000-0000-0000-0000-000000000006',
    'TELUS Digital AI',
    'telus-digital',
    'https://telusinternational.ai',
    '/logos/telus.svg',
    'Global AI community delivering enterprise data solutions, annotation, speech recording, and local search evaluation.',
    true,
    'https://telusinternational.ai/community',
    ARRAY['telusinternational.ai', 'jobs.telusinternational.com'],
    'active',
    NOW()
  )
ON CONFLICT (slug) DO UPDATE
SET
  name = EXCLUDED.name,
  website_url = EXCLUDED.website_url,
  description = EXCLUDED.description,
  allowed_domains = EXCLUDED.allowed_domains;

-- ==============================================================================
-- 3. Seed Authorized Connectors
-- ==============================================================================

INSERT INTO job_sources (id, platform_id, name, source_type, endpoint_or_reference, is_enabled, poll_interval_minutes, terms_review_status, terms_reviewed_at)
VALUES
  (
    's1000000-0000-0000-0000-000000000001',
    'p1000000-0000-0000-0000-000000000001',
    'DataAnnotation Authorized Public Feed',
    'permitted_public_page',
    'https://dataannotation.tech/feed/jobs.json',
    true,
    360,
    'approved',
    NOW()
  ),
  (
    's1000000-0000-0000-0000-000000000002',
    'p1000000-0000-0000-0000-000000000002',
    'Outlier Partner API Connector',
    'official_api',
    'https://api.outlier.ai/v1/opportunities',
    true,
    180,
    'approved',
    NOW()
  )
ON CONFLICT DO NOTHING;

-- ==============================================================================
-- 4. Seed Canonical Jobs
-- ==============================================================================

-- 4.1 Approved & Published Jobs
INSERT INTO jobs (
  id,
  platform_id,
  category_id,
  title,
  slug,
  summary,
  description,
  employment_type,
  work_arrangement,
  pay_min,
  pay_max,
  pay_currency,
  pay_period,
  country_eligibility_type,
  eligible_country_codes,
  eligibility_evidence,
  required_skills,
  required_languages,
  experience_level,
  weekly_hours_min,
  weekly_hours_max,
  equipment_requirements,
  source_job_id,
  source_url,
  discovered_at,
  last_verified_at,
  status,
  verification_status,
  is_featured,
  published_at
)
VALUES
  (
    'j1000000-0000-0000-0000-000000000001',
    'p1000000-0000-0000-0000-000000000001',
    'c1000000-0000-0000-0000-000000000003',
    'AI Trainer – Software Engineering (Python & TypeScript)',
    'ai-trainer-software-engineering-dataannotation',
    'Write code solutions, construct unit tests, and grade AI model code output in Python and modern TypeScript.',
    'As an AI Coding Trainer, you will build complex programming prompts, evaluate model-generated source code, verify test suite coverage, and provide clear explanations of algorithmic optimizations. Projects are self-paced and completely remote.',
    'Contract / Freelance',
    'remote',
    40.00,
    45.00,
    'USD',
    'hour',
    'worldwide',
    '{}',
    'Source careers page specifies: Open to global applicants worldwide with valid remote work capability.',
    ARRAY['Python', 'TypeScript', 'Data Structures', 'Code Review', 'Unit Testing'],
    '[{"language": "English", "proficiency": "Professional"}]'::jsonb,
    'Intermediate / Senior',
    10.0,
    40.0,
    'Modern laptop or desktop with reliable high-speed internet connection.',
    'da_eng_001',
    'https://dataannotation.tech/careers/se-trainer',
    NOW() - INTERVAL '3 days',
    NOW(),
    'approved',
    'verified',
    true,
    NOW() - INTERVAL '3 days'
  ),
  (
    'j1000000-0000-0000-0000-000000000002',
    'p1000000-0000-0000-0000-000000000002',
    'c1000000-0000-0000-0000-000000000002',
    'Multi-Modal AI Evaluator & Quality Grader',
    'multimodal-ai-evaluator-quality-grader-outlier',
    'Review multi-turn model dialogs, fact-check responses, and grade image-text outputs against quality guidelines.',
    'Evaluate frontier multimodal AI systems by comparing pairs of model responses, rating their accuracy, truthfulness, style, and helpfulness according to structured rubrics. Includes safety evaluation and refusal calibration.',
    'Contract / Freelance',
    'remote',
    25.00,
    35.00,
    'USD',
    'hour',
    'selected_countries',
    ARRAY['US', 'CA', 'GB', 'AU', 'NZ'],
    'Source terms verify candidate location is restricted to English-primary regions (US, CA, UK, AU, NZ).',
    ARRAY['Critical Thinking', 'Fact-Checking', 'Technical Writing', 'Data Evaluation'],
    '[{"language": "English", "proficiency": "Native"}]'::jsonb,
    'Entry / Mid',
    15.0,
    30.0,
    'Desktop or laptop (Chrome browser required); smartphone for MFA.',
    'out_eval_002',
    'https://outlier.ai/careers/multimodal-evaluator',
    NOW() - INTERVAL '2 days',
    NOW(),
    'approved',
    'verified',
    true,
    NOW() - INTERVAL '2 days'
  ),
  (
    'j1000000-0000-0000-0000-000000000003',
    'p1000000-0000-0000-0000-000000000003',
    'c1000000-0000-0000-0000-000000000001',
    'Generalist AI Model Evaluator & Reasoning Analyst',
    'generalist-ai-model-evaluator-mercor',
    'Conduct qualitative assessments of model logic, complex prompt adherence, and long-context summarization.',
    'Mercor is contracting global generalist analysts to evaluate conversational AI models across a wide spectrum of creative, technical, and reasoning tasks. Fast payouts and asynchronous workflow.',
    'Contract / Freelance',
    'remote',
    20.00,
    30.00,
    'USD',
    'hour',
    'worldwide',
    '{}',
    'Mercor operates global remote payroll and verifies candidate eligibility across all non-sanctioned jurisdictions.',
    ARRAY['Reasoning', 'Reading Comprehension', 'Analytical Thinking', 'Text Analysis'],
    '[{"language": "English", "proficiency": "Fluent"}]'::jsonb,
    'All Levels',
    10.0,
    35.0,
    'Personal computer with modern web browser and webcam for verification.',
    'mer_gen_003',
    'https://mercor.com/jobs/ai-evaluator',
    NOW() - INTERVAL '1 day',
    NOW(),
    'approved',
    'verified',
    false,
    NOW() - INTERVAL '1 day'
  ),
  (
    'j1000000-0000-0000-0000-000000000004',
    'p1000000-0000-0000-0000-000000000004',
    'c1000000-0000-0000-0000-000000000005',
    'Subject-Matter Expert – Advanced Mathematics & Physics',
    'sme-mathematics-physics-alignerr',
    'Create and verify complex mathematical proofs, Olympiad-level equations, and physics simulation benchmarks.',
    'Alignerr is seeking degree holders and researchers in Mathematics, Physics, or related quantitative disciplines to author gold-standard reasoning chains and critique synthetic derivations.',
    'Contract / Freelance',
    'remote',
    45.00,
    60.00,
    'USD',
    'hour',
    'worldwide',
    '{}',
    'Alignerr accepts worldwide degree holders with passing assessment scores.',
    ARRAY['LaTeX', 'Calculus', 'Linear Algebra', 'Quantum Mechanics', 'Mathematical Proofs'],
    '[{"language": "English", "proficiency": "Professional"}]'::jsonb,
    'Expert / Post-Grad',
    5.0,
    25.0,
    'Computer with LaTeX editing capability.',
    'aln_math_004',
    'https://alignerr.com/careers/math-sme',
    NOW() - INTERVAL '4 days',
    NOW(),
    'approved',
    'verified',
    true,
    NOW() - INTERVAL '4 days'
  ),
  (
    'j1000000-0000-0000-0000-000000000005',
    'p1000000-0000-0000-0000-000000000005',
    'c1000000-0000-0000-0000-000000000006',
    'French-English Bilingual AI Alignment Specialist',
    'bilingual-french-english-ai-alignment-mindrift',
    'Localize, translate, and calibrate French language model generations to maintain native linguistic nuances.',
    'Work with cross-functional AI teams to evaluate nuance, cultural appropriateness, and dialect subtleties in French LLM prompt outputs.',
    'Contract / Freelance',
    'remote',
    28.00,
    38.00,
    'USD',
    'hour',
    'selected_countries',
    ARRAY['FR', 'CA', 'BE', 'CH'],
    'Restricted to native French speakers residing in France, Canada, Belgium, or Switzerland.',
    ARRAY['French (C2)', 'Translation', 'Grammar QA', 'Cultural Localization'],
    '[{"language": "French", "proficiency": "Native"}, {"language": "English", "proficiency": "Professional"}]'::jsonb,
    'Mid / Senior',
    10.0,
    30.0,
    'Standard workstation with keyboard supporting French diacritics.',
    'mdr_fr_005',
    'https://mindrift.ai/jobs/french-linguist',
    NOW() - INTERVAL '5 days',
    NOW(),
    'approved',
    'verified',
    false,
    NOW() - INTERVAL '5 days'
  ),
  (
    'j1000000-0000-0000-0000-000000000006',
    'p1000000-0000-0000-0000-000000000006',
    'c1000000-0000-0000-0000-000000000008',
    'Multilingual Audio Transcription & Speech Evaluator',
    'multilingual-audio-transcription-speech-evaluator-telus',
    'Listen to spoken audio snippets, transcribe phonetic elements, and rate automated speech recognition accuracy.',
    'Join TELUS Digital AI global community to assist in improving automatic speech recognition (ASR) engines. Flexible micro-task assignments based on volume.',
    'Part-Time / Task',
    'remote',
    NULL,
    NULL,
    'USD',
    'task',
    'worldwide',
    '{}',
    'Public community portal accepts worldwide contributors for speech transcription projects.',
    ARRAY['Audio Transcription', 'Phonetics', 'Attention to Detail', 'Listening Comprehension'],
    '[{"language": "English", "proficiency": "Fluent"}]'::jsonb,
    'Entry Level',
    5.0,
    20.0,
    'Quiet environment, high-quality over-ear headphones, and modern web browser.',
    'tel_aud_006',
    'https://telusinternational.ai/community/audio-eval',
    NOW() - INTERVAL '6 days',
    NOW(),
    'approved',
    'verified',
    false,
    NOW() - INTERVAL '6 days'
  );

-- 4.2 Seed a Pending Review Job (For Admin Queue testing)
INSERT INTO jobs (
  id,
  platform_id,
  category_id,
  title,
  slug,
  summary,
  description,
  employment_type,
  work_arrangement,
  pay_min,
  pay_max,
  pay_currency,
  pay_period,
  country_eligibility_type,
  eligible_country_codes,
  eligibility_evidence,
  required_skills,
  required_languages,
  experience_level,
  source_job_id,
  source_url,
  discovered_at,
  status,
  verification_status,
  published_at
)
VALUES
  (
    'j1000000-0000-0000-0000-000000000007',
    'p1000000-0000-0000-0000-000000000002',
    'c1000000-0000-0000-0000-000000000003',
    'Frontier Code Benchmark Evaluator (Rust & Go)',
    'frontier-code-benchmark-evaluator-rust-go-outlier',
    'Recently discovered via automated feed. Awaiting human moderator verification of eligibility and rate accuracy.',
    'Write systems benchmarks and grade AI compilation logs for Rust and Go memory-safety evaluations.',
    'Contract / Freelance',
    'remote',
    50.00,
    65.00,
    'USD',
    'hour',
    'not_confirmed',
    '{}',
    'Auto-ingested from API feed; country restrictions not yet confirmed by human moderator.',
    ARRAY['Rust', 'Go', 'Systems Programming', 'Concurrency'],
    '[{"language": "English", "proficiency": "Professional"}]'::jsonb,
    'Senior',
    'out_rust_007',
    'https://outlier.ai/careers/rust-go-evaluator',
    NOW(),
    'pending_review',
    'needs_review',
    NULL
  )
ON CONFLICT (slug) DO NOTHING;

-- ==============================================================================
-- 5. Seed Initial Audit Log
-- ==============================================================================

INSERT INTO admin_audit_logs (action, entity_type, entity_id, after_data, reason)
VALUES
  ('SYSTEM_INIT', 'database_schema', 'trainlyai_core', '{"version": "1.0.0", "migrations": 3}'::jsonb, 'Initial database schema and seed data deployment')
ON CONFLICT DO NOTHING;
