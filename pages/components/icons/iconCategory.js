export default function IconCategory(props) {
    return (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          height="24"
          width="24"
          {...props}
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M14 4h6v6h-6zM4 14h6v6H4z" />
          <path d="M20 17 A3 3 0 0 1 17 20 A3 3 0 0 1 14 17 A3 3 0 0 1 20 17 z" />
          <path d="M10 7 A3 3 0 0 1 7 10 A3 3 0 0 1 4 7 A3 3 0 0 1 10 7 z" />
        </svg>
    );
}