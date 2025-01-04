import { balloons } from "balloons-js";
import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="py-6">
      <div className="container cursor-default flex items-center justify-center gap-4 px-4 md:px-6">
        <p className="text-sm text-muted-foreground">
          Bilal Gürşen tarafından{" "}
          <span
            onClick={() => {
              balloons();
            }}
          >
            ❤️
          </span>{" "}
          ile Serap Paçacı için yazılmıştır
        </p>
        <span className="text-muted-foreground">|</span>
        <a
          href="https://github.com/bilalgursen/sessizciglik"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <FaGithub className="text-lg" />
          <span>Açık Kaynak</span>
        </a>
      </div>
    </footer>
  );
}
