// @ts-nocheck

import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { Link } from "react-router";
import NavItems from "./NavItems";

const MobileSidebar = () => {
  let sidebar: SidebarComponent;

  const toggleSidebar = () => {
    sidebar.toggle();
  };

  return (
    <div className="mobile-sidebar wrapper">
      <header>
        <Link to="/">
          <img src="/icons/logo.svg" alt="Logo" className="size-[30px]" />

          <h1>Tourvisto</h1>
        </Link>

        <button onClick={toggleSidebar}>
          <img
            src="/icons/menu.svg"
            alt="Menu"
            className="size-7 cursor-pointer"
          />
        </button>
      </header>

      <SidebarComponent
        width={270}
        ref={(Sidebar) => (sidebar = Sidebar)}
        created={() => sidebar.hide()}
        closeOnDocumentClick
        showBackdrop
        type="over"
      >
        <NavItems handleClick={toggleSidebar} />
      </SidebarComponent>
    </div>
  );
};

export default MobileSidebar;
