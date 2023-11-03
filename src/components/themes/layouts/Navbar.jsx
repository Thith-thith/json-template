import { useAuth } from "~/context/useAuth";

const Navbar = () => {
  const { data } = useAuth();
  const { header } = data?.homePage;

  return (
    <nav class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {header.menu.map((res) => {
              return (
                <>
                  {res.children ? (
                    <li tabindex="0">
                      <details>
                        <summary>{res.title}</summary>
                        <ul class="p-2">
                          {res.children?.map((menu) => {
                            return (
                              <li>
                                <a>{menu.title}</a>
                              </li>
                            );
                          })}
                        </ul>
                      </details>
                    </li>
                  ) : (
                    <li>
                      <a>{res.title}</a>
                    </li>
                  )}
                </>
              );
            })}
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl">
          <img alt={header.logo} src={`/images/${header.logo}`} class="w-48" />
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          {header.menu.map((res) => {
            return (
              <>
                {res.children ? (
                  <li tabindex="0">
                    <details>
                      <summary>{res.title}</summary>
                      <ul class="p-2">
                        {res.children?.map((menu) => {
                          return (
                            <li>
                              <a>{menu.title}</a>
                            </li>
                          );
                        })}
                      </ul>
                    </details>
                  </li>
                ) : (
                  <li>
                    <a>{res.title}</a>
                  </li>
                )}
              </>
            );
          })}
        </ul>
      </div>
      <div class="navbar-end">
        <a class="btn">{header.buttons.button1}</a>
      </div>
    </nav>
  );
};

export default Navbar;
