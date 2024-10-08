"use client";
import {
  DarkThemeToggle,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export function Nav() {
  return (
    <Navbar fluid>
      <NavbarBrand as={Link} href="/">
        <Image src="images/image.png" alt="Branding" width={45} height={45} />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Scouting
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        {/* <Button
          as="span"
          className="cursor-pointer"
          onClick={() => {
            setDebug((isDebug) => !isDebug );
          }}
        >
          Debug Mode
        </Button> */}
        <DarkThemeToggle />
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        {/* See comment bellow */}
        <Link href="/drafts" passHref>
          <NavbarLink active>Drafts</NavbarLink>
        </Link>
        {/* Using Link to handle linking via basePath for you? */}
        {/* <NavbarLink as={Link} href="#">
          About
        </NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink> */}
        <Link href="/auto" passHref>
          <NavbarLink active>Mock passing new draft</NavbarLink>
        </Link>
      </NavbarCollapse>
    </Navbar>
  );
}
