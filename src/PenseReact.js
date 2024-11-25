import { useState } from 'react';

function ProductCategoryRow({ category }) {
    return (
        <tr>
            <th colSpan="2">
                {category}
            </th>
        </tr>
    );
}

function ProductRow({ product }) {
    const name = product.stocked ? product.name :
        <span style={{ color: 'red' }}>
            {product.name}
        </span>;

    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
}

function ProductTable({ products, filterText, inStockOnly }) {
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        if (
            product.name.toLowerCase().indexOf(
                filterText.toLowerCase()
            ) === -1
        ) {
            return;
        }
        if (inStockOnly && !product.stocked) {
            return;
        }
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category} />
            );
        }
        rows.push(
            <ProductRow
                product={product}
                key={product.name} />
        );
        lastCategory = product.category;
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prix</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
    return (
        <form>
            <input
                type="text"
                value={filterText}
                placeholder="Recherche..."
                onChange={(e) => onFilterTextChange(e.target.value)} />
            <label>
                <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => onInStockOnlyChange(e.target.checked)} />
                {' '}
                N'afficher que les produits en stock
            </label>
        </form>
    )
}

function FilterableProductTable(props) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    return (
        <div>
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly} />
            <ProductTable products={props.products} filterText={filterText} inStockOnly={inStockOnly} />
        </div>
    );
}

const PRODUCTS = [
    { category: "Fruits", price: "1 €", stocked: true, name: "Pomme" },
    { category: "Fruits", price: "1 €", stocked: true, name: "Fruit du dragon" },
    { category: "Fruits", price: "2 €", stocked: false, name: "Fruit de la passion" },
    { category: "Légumes", price: "2 €", stocked: true, name: "Épinard" },
    { category: "Légumes", price: "4 €", stocked: false, name: "Citrouille" },
    { category: "Légumes", price: "1 €", stocked: true, name: "Petits pois" }
];
export default function PenseReact() {
    return (
        <FilterableProductTable products={PRODUCTS} />
    );
}
