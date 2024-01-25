
import {Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, Spacer} from "@nextui-org/react";
import {SearchIcon} from "@/app/SearchIcon";

export default function Home() {
  return (
      <>
        <Navbar maxWidth={"2xl"} position="static" isBordered isBlurred={false}>
          <NavbarBrand>
              <p className="font-bold text-inherit">Kumo</p>
          </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="start">
                <NavbarItem isActive>
                    <Link color="foreground" href="#">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Forum
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        About
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="center">
                <Input
                    classNames={{
                        base: "max-w-full sm:max-w-[10rem] h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="Type to search..."
                    size="sm"
                    startContent={<SearchIcon size={18} width={undefined} height={undefined} />}
                    type="search"
                />
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
          <Spacer></Spacer>
      </>
  );
}
