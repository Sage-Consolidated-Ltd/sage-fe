import React from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  className = "",
}) => {
  return (
    <div className={`flex items-center justify-between mb-4 ${className}`}>
      <nav
        className="flex items-center gap-1 font-medium"
        aria-label="Breadcrumb"
      >
        <ol className="flex items-center gap-1">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={index} className="flex items-center gap-1">
                {index > 0 && (
                  <span className="text-text-muted" aria-hidden="true">
                    /
                  </span>
                )}

                {item.href && !isLast ? (
                  <a
                    href={item.href}
                    className="text-text-muted hover:text-text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span
                    className={isLast ? "text-text-primary" : "text-text-muted"}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};
