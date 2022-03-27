-- Table: public.users

-- DROP TABLE public.users;

CREATE TABLE IF NOT EXISTS public.users
(
    "userID" integer NOT NULL DEFAULT nextval('"users_userID_seq"'::regclass),
    provider text COLLATE pg_catalog."default",
    "providerToken" text COLLATE pg_catalog."default",
    name text COLLATE pg_catalog."default",
    given_name text COLLATE pg_catalog."default",
    family_name text COLLATE pg_catalog."default",
    email text COLLATE pg_catalog."default",
    picture text COLLATE pg_catalog."default",
    "lastSignIn" timestamp with time zone,
    "lastSurveyCompleted" timestamp with time zone,
    "accountCreated" date,
    CONSTRAINT users_pkey PRIMARY KEY ("userID")
)

TABLESPACE pg_default;

ALTER TABLE public.users
    OWNER to cbeqsgzwrutlcn;