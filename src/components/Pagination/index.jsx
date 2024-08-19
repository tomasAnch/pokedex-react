import styles from './styles.module.scss';

export const Pagination = ({ perPage, page, nextPage, previousPage, maxItems }) => {
    const lastPage = Math.ceil( maxItems / perPage );

    return(
        <div className={ styles.pagination }>
            <button disabled={ page === 1 } onClick={ previousPage }>
                &lt;
            </button>
            <span>{ page }</span>
            <button disabled={ page === lastPage } onClick={ previousPage }>
                &gt;
            </button>
        </div>
    );
};