import HomeIcon from "../UI/icons/HomeIcon";
import MathIcon from "../UI/icons/MathIcon";
import HeaderButton from "@/components/UI/buttons/HeaderButton";
import UserAvatar from "@/components/UI/UserAvatar";
import ThemeSwitch from "@/features/theme/ThemeSwitch";
// import { useAuthStore } from "@/features/auth/use-auth-store";

export default function Header() {
  // const { userId } = useAuthStore();

  return (
    <header className="flex justify-between p-4">
      <nav
        role="navigation"
        aria-label="Hlavní navigace"
        className="flex justify-between"
      >
        <HeaderButton href="/" aria-label="Domů">
          <HomeIcon />
        </HeaderButton>
        <HeaderButton
          href="/practice"
          aria-label="Uživatelský dashboard"
          disabled={true}
        >
          <MathIcon />
        </HeaderButton>
      </nav>
      <nav
        role="navigation"
        aria-label="Uživatelská navigace"
        className="flex justify-between"
      >
        <ThemeSwitch />
        <HeaderButton
          href="/profile"
          aria-label="Nastavení uživatele"
          disabled={true}
        >
          <UserAvatar />
        </HeaderButton>
      </nav>
    </header>
  );
}
