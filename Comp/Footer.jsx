import { SocialLinks } from "./SocialLinks.jsx";
export function Footer() {
  return (
    <footer>
      <div className="logo">
        Blogin<span>.</span>
      </div>
      <div className="copyright">
        © 2014 Blogin.com - All Rights Reserved - Find more free Templates at{" "}
        <span>Pixelhint.com</span>
      </div>
      <SocialLinks />
    </footer>
  );
}
