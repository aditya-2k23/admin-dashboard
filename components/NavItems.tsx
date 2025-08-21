import { cn } from "lib/utils";
import { Link, NavLink } from "react-router";
import { sidebarItems } from "~/constants";

const NavItems = ({ handleClick }: { handleClick?: () => void }) => {
  const user = {
    name: "Aditya",
    email: "holaaditya123@gmail.com",
    imageUrl: "/images/david.webp",
  };

  return (
    <section className="nav-items">
      <Link to="/" className="link-logo">
        <img src="/icons/logo.svg" alt="logo" className="size-[30px]" />
        <h1>Tourvisto</h1>
      </Link>

      <div className="container">
        <nav>
          {sidebarItems.map(({ id, href, icon, label }) => (
            <NavLink to={href} key={id}>
              {({ isActive }: { isActive: boolean }) => (
                <div
                  className={cn("group nav-item", {
                    "bg-primary-100 !text-white": isActive,
                  })}
                  onClick={handleClick}
                >
                  <img
                    src={icon}
                    className={`group-hover:brightness-0 size-0 group-hover:invert ${isActive ? "brightness-0 invert" : "text-dark-200"}`}
                    alt={label}
                  />
                  {label}
                </div>
              )}
            </NavLink>
          ))}
        </nav>

        <footer className="nav-footer">
          <img
            src={user?.imageUrl || "/images/david.webp"}
            alt={user?.name || "David"}
          />

          <article>
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
          </article>

          <button
            onClick={() => console.log("Sign Out")}
            className="cursor-pointer"
          >
            <img src="/icons/logout.svg" alt="Sign Out" className="size-6" />
          </button>
        </footer>
      </div>
    </section>
  );
};

export default NavItems;
