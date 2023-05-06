BEGIN;


CREATE TABLE IF NOT EXISTS public."Product"
(
    id integer NOT NULL DEFAULT nextval('"Product_id_seq"'::regclass),
    name character(50) COLLATE pg_catalog."default" NOT NULL,
    price money NOT NULL,
    quantity integer NOT NULL,
    "sellerId" integer NOT NULL,
    CONSTRAINT "Product_pkey" PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public."Seller"
(
    id integer NOT NULL DEFAULT nextval('"Seller_id_seq"'::regclass),
    name character(50) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Seller_pkey" PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS public."Product"
    ADD CONSTRAINT "Product_sellerId_fkey" FOREIGN KEY ("sellerId")
    REFERENCES public."Seller" (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE RESTRICT;

END;
