import { useEffect } from 'react';
import { createPopper } from '@popperjs/core';

const useComunityMotor = () => {
  const useSidebar = () => {
    useEffect(() => {
      const sidebarToggle = document.querySelector(".sidebar-toggle") as HTMLElement;
      const sidebarOverlay = document.querySelector(".sidebar-overlay") as HTMLElement;
      const sidebarMenu = document.querySelector(".sidebar-menu") as HTMLElement;
      const main = document.querySelector(".main") as HTMLElement;

      const handleSidebarToggle = (e: MouseEvent) => {
        e.preventDefault();
        main?.classList.toggle("active");
        sidebarOverlay?.classList.toggle("hidden");
        sidebarMenu?.classList.toggle("-translate-x-full");
      };

      const handleSidebarOverlay = (e: MouseEvent) => {
        e.preventDefault();
        main?.classList.add("active");
        sidebarOverlay?.classList.add("hidden");
        sidebarMenu?.classList.add("-translate-x-full");
      };

      sidebarToggle?.addEventListener("click", handleSidebarToggle);
      sidebarOverlay?.addEventListener("click", handleSidebarOverlay);

      return () => {
        sidebarToggle?.removeEventListener("click", handleSidebarToggle);
        sidebarOverlay?.removeEventListener("click", handleSidebarOverlay);
      };
    }, []);
  };

  const useDropdown = () => {
    useEffect(() => {
      const popperInstance: Record<string, ReturnType<typeof createPopper>> = {};

      document.querySelectorAll<HTMLElement>(".dropdown").forEach((item, index) => {
        const popperId = "popper-" + index;
        const toggle = item.querySelector(".dropdown-toggle") as HTMLElement;
        const menu = item.querySelector(".dropdown-menu") as HTMLElement;
        menu.dataset.popperId = popperId;
        popperInstance[popperId] = createPopper(toggle, menu, {
          modifiers: [
            { name: "offset", options: { offset: [0, 8] } },
            { name: "preventOverflow", options: { padding: 24 } },
          ],
          placement: "bottom-end",
        });
      });

      const hideDropdown = () => {
        document.querySelectorAll<HTMLElement>(".dropdown-menu").forEach(item => {
          item.classList.add("hidden");
        });
      };

      const showPopper = (popperId: string) => {
        popperInstance[popperId].setOptions(options => ({
          ...options,
          modifiers: [
            ...(options.modifiers ?? []), // Ensuring it's an array
            { name: "eventListeners", enabled: true },
          ],
        }));
        popperInstance[popperId].update();
      };

      const hidePopper = (popperId: string) => {
        popperInstance[popperId].setOptions(options => ({
          ...options,
          modifiers: [
            ...(options.modifiers ?? []), // Ensuring it's an array
            { name: "eventListeners", enabled: false },
          ],
        }));
      };

      const handleDocumentClick = (e: MouseEvent) => {
        const toggle = (e.target as HTMLElement).closest(".dropdown-toggle");
        const menu = (e.target as HTMLElement).closest(".dropdown-menu");

        if (toggle) {
          const menuEl = toggle.closest(".dropdown")?.querySelector(".dropdown-menu") as HTMLElement;
          const popperId = menuEl.dataset.popperId!;
          if (menuEl.classList.contains("hidden")) {
            hideDropdown();
            menuEl.classList.remove("hidden");
            showPopper(popperId);
          } else {
            menuEl.classList.add("hidden");
            hidePopper(popperId);
          }
        } else if (!menu) {
          hideDropdown();
        }
      };

      document.addEventListener("click", handleDocumentClick);

      return () => {
        document.removeEventListener("click", handleDocumentClick);
      };
    }, []);
  };

  const useTabs = () => {
    useEffect(() => {
      document.querySelectorAll<HTMLElement>("[data-tab]").forEach(item => {
        item.addEventListener("click", e => {
          e.preventDefault();
          const tab = item.dataset.tab!;
          const page = item.dataset.tabPage!;
          const target = document.querySelector(
            `[data-tab-for="${tab}"][data-page="${page}"]`
          ) as HTMLElement;

          document.querySelectorAll<HTMLElement>(`[data-tab="${tab}"]`).forEach(i => {
            i.classList.remove("active");
          });
          document.querySelectorAll<HTMLElement>(`[data-tab-for="${tab}"]`).forEach(i => {
            i.classList.add("hidden");
          });
          item.classList.add("active");
          target.classList.remove("hidden");
        });
      });
    }, []);
  };

  // Call the hooks to apply the effects
  useDropdown();
  useTabs();
  useSidebar();
};

export default useComunityMotor;
