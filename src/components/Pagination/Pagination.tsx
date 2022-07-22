import classNames from 'classnames';
import React from 'react';

type Props = {
  total: number,
  perPage: number,
  currentPage: number,
  onPageChange: (page: number) => void,
};

export const Pagination: React.FC<Props> = React.memo(
  ({
    total,
    perPage,
    currentPage,
    onPageChange,
  }) => {
    const pages = Math.ceil(total / perPage);

    return (
      <ul className="pagination">
        <li className={classNames(
          'page-item',
          { disabled: currentPage === 1 },
        )}
        >
          <a
            data-cy="prevLink"
            className="page-link"
            href="#prev"
            aria-disabled="true"
            onClick={() => onPageChange(currentPage - 1)}
          >
            «
          </a>
        </li>

        {[...new Array(pages)].map((_, i) => (
          <li
            key={Math.random()}
            className={classNames(
              'page-item',
              { active: currentPage === i + 1 },
            )}
          >
            <a
              data-cy="pageLink"
              className="page-link"
              href="#1"
              onClick={() => onPageChange(i + 1)}
            >
              {i + 1}
            </a>
          </li>
        ))}

        <li className={classNames(
          'page-item',
          { disabled: currentPage === pages },
        )}
        >
          <a
            data-cy="nextLink"
            className="page-link"
            href="#next"
            aria-disabled="false"
            onClick={() => onPageChange(currentPage + 1)}
          >
            »
          </a>
        </li>
      </ul>
    );
  },
);
