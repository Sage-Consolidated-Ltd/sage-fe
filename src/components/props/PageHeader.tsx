import React, { type ReactNode } from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: ReactNode; // flexible slot for any buttons
  maxWidth?: string;
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  breadcrumbs,
  actions,
  maxWidth = "max-w-[654px]",
  className = "",
}) => {
  return (
    <div
      className={`bg-surface px-[30px] py-[27px] shadow-card rounded-[18px] flex flex-col gap-y-6 mb-6 ${className}`}
    >
      {/* Breadcrumbs */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="flex items-center justify-between">
          <nav
            className="flex items-center gap-1 font-medium"
            aria-label="Breadcrumb"
          >
            <ol className="flex items-center gap-1">
              {breadcrumbs.map((item, index) => {
                const isLast = index === breadcrumbs.length - 1;
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
                        className={
                          isLast ? "text-text-primary" : "text-text-muted"
                        }
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
      )}

      {/* Title + description + actions */}
      <div className="flex items-center justify-between gap-6 flex-wrap">
        <div className={maxWidth}>
          <h1 className="text-xl text-text-primary">{title}</h1>
          {description && (
            <p className="text-xs text-text-secondary mt-0.5">{description}</p>
          )}
        </div>

        {actions && (
          <div className="w-fit flex items-center flex-wrap gap-3 shrink-0">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};
