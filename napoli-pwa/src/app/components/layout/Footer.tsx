"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { IMAGES } from "../../lib/images";
import { BRAND_INFO } from "../../lib/branding";
import { LogoSwitcher } from "../ui/LogoSwitcher";

export function Footer() {
  return (
    <footer className="bg-neutral-900 py-12 text-gray-400 md:py-16">
      <div className="container mx-auto grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left">
        {/* Logo and Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="mb-4">
            <LogoSwitcher />
          </Link>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {BRAND_INFO.name} Floripa | FLD
            <br />
            Todos os direitos reservados.
          </p>
        </div>

        {/* Locations and Contact */}
        <div>
          <h3 className="mb-4 font-bold uppercase tracking-wider text-white">
            Nossas Unidades
          </h3>
          <address className="space-y-2 not-italic text-sm">
            {BRAND_INFO.addresses.map((loc) => (
              <p key={loc.name}>
                <strong>{loc.name}:</strong>{" "}
                <a
                  href={loc.maps_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {loc.address}
                </a>
              </p>
            ))}
          </address>
          <div className="mt-4">
            <h3 className="mb-2 font-bold uppercase tracking-wider text-white">
              Contato
            </h3>
            <p className="text-sm">
              Fone:{" "}
              <a href={BRAND_INFO.phone.link} className="hover:text-white">
                {BRAND_INFO.phone.display}
              </a>
            </p>
            <p className="text-sm">{BRAND_INFO.operatingHours}</p>
          </div>
        </div>

        {/* Social Media and Legal */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="mb-4 font-bold uppercase tracking-wider text-white">
            Siga-nos
          </h3>
          <div className="flex space-x-4">
            <a
              href={BRAND_INFO.socials.facebook}
              className="text-gray-400 hover:text-white"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href={BRAND_INFO.socials.instagram}
              className="text-gray-400 hover:text-white"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href={BRAND_INFO.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="h-6 w-6" />
            </a>
          </div>
          <div className="mt-6">
            <Image
              src={IMAGES.icons.ssl}
              alt="SSL Secure"
              width={100}
              height={50}
            />
            <div className="mt-2 flex justify-center md:justify-start">
              <Image
                src={IMAGES.icons.visa}
                alt="Visa"
                width={40}
                height={25}
              />
              <Image
                src={IMAGES.icons.mastercard}
                alt="Mastercard"
                width={40}
                height={25}
              />
            </div>
            <p className="mt-1 text-xs">
              PAGUE COM CARTÃO DE CRÉDITO NA SUA CASA!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
