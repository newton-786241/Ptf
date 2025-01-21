declare global {
    namespace JSX {
      interface IntrinsicElements {
        // Extending JSX with custom elements
        mesh: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      }
    }
  }
  