import Component from './Component.js';
import hashStorage from '../hash-storage.js';

class Paging extends Component {
    render() {
        const dom = this.renderDOM();

        const prevButton = dom.querySelector('.prev');
        const nextButton = dom.querySelector('.next');

        function updatePage(change) {
            const queryProps = hashStorage.get();
            let page = queryProps.page ? parseInt(queryProps.page) : 1;
            page += change;
            hashStorage.set({ page });
        }

        prevButton.addEventListener('click', () => {
            updatePage(-1);
        });

        nextButton.addEventListener('click', () => {
            updatePage(1);
        });

        return dom;
    }

    renderTemplate() {
        const currentPage = parseInt(this.props.currentPage);
        const totalPages = parseInt(this.props.totalPages);
        return /*html*/ `
            <section>
                <button class="prev" ${currentPage === 1 ? 'disabled' : ''}>Prev</button>
                <span>${currentPage} page of ${totalPages}</span>
                <button class="next" ${currentPage === totalPages ? 'disabled' : ''}>Next</button>
            </section>
        `;
    }
}

export default Paging;