export default function IconChange(props) {
    return (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        height="2em"
        width="1.5em"
        {...props}
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M7 18 A2 2 0 0 1 5 20 A2 2 0 0 1 3 18 A2 2 0 0 1 7 18 z" />
        <path d="M21 6 A2 2 0 0 1 19 8 A2 2 0 0 1 17 6 A2 2 0 0 1 21 6 z" />
        <path d="M19 8v5a5 5 0 01-5 5h-3l3-3m0 6l-3-3M5 16v-5a5 5 0 015-5h3l-3-3m0 6l3-3" />
      </svg>
    );
}
  