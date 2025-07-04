import { useFilterContext } from '../Context/filter_context';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import FormatPrice from '../Helpers/FormatPrice';
import { Button } from '../Styles/Button';

const FilterSection = () => {

  const { filters: { text, category, color, price, maxPrice, minPrice }, clearFilters, all_products, updateFilterValue } = useFilterContext();

  // TO GET THE UNIQUE DATA OF EACH FIELDS
  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });

    if (attr === "colors") {
      // return (newVal = ["ALL", ...new Set([].concat(...newVal))]);
      newVal = newVal.flat();
    }
    return newVal = ["all", ...new Set(newVal)]
  };

  // we need unique data
  const categoryOnlyData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");

  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilterValue}
            placeholder='Search'
          />
        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {
            categoryOnlyData.map((curElem, index) => {
              return (
                <button
                  key={index}
                  type='button'
                  name='category'
                  value={curElem}
                  onClick={updateFilterValue}>
                  {curElem}
                </button>
              )
            })
          }
        </div>
      </div>

      <div className="filter-company">
        <h3>Company</h3>
        <form action="#">
          <select
            name="company"
            id="company"
            className='filter-company--select'
            onClick={updateFilterValue}>
            {
              companyData.map((curElem, index) => {
                return (
                  <option key={index} value={curElem} name="company">{curElem}</option>
                )
              })
            }
          </select>
        </form>
      </div>


      <div className="filter-colors colors">
        <h3>Colors</h3>

        <div className="filter-color-style">
          {colorsData.map((curColor, index) => {
            if (curColor === "all") {
              return (
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="color"
                  className="color-all--style"
                  onClick={updateFilterValue}>
                  all
                </button>
              );
            }
            return (
              <button
                key={index}
                type="button"
                value={curColor}
                name="color"
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={updateFilterValue} >
                {color === curColor ? <FaCheck className='checkStyle' /> : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter_price">
        <h3>Price</h3>
        <p>
          <FormatPrice price={price} />
        </p>
        <input
          type="range"
          name="price"
          value={price}
          min={minPrice}
          max={maxPrice}
          onChange={updateFilterValue} />
      </div>

      <div className="filter-clear">
        <Button className="btn" onClick={clearFilters}>Clear Filters</Button>
      </div>
    </Wrapper >
  )
}

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-weight: bold;  
    font-size: 1.6rem;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 100%;     
      max-width: 400px;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        font-size: 1.4rem;
        transition: 0.3s ease;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.6rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
    border: 1px solid #ccc;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.white};
  }

  .filter-color-style {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.8rem;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
    font-size: 1.4rem;
  }

  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input[type="range"] {
      margin: 0.5rem 0 1rem 0;
      cursor: pointer;
      width: 100%;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;

    input[type="checkbox"] {
      transform: scale(1.2);
      cursor: pointer;
    }

    label {
      font-size: 1.4rem;
    }
  }

  .filter-clear {
    .btn {
      background-color: #ec7063;
      color: #000;
      padding: 0.8rem 1.2rem;
      border-radius: 6px;
      font-size: 1.4rem;
      cursor: pointer;
      border: none;
    }
  }

  /* ✅ Mobile responsive adjustments */
  @media (max-width: 768px) {
    padding: 3rem 1rem;

    h3 {
      font-size: 1.4rem;
    }

    .filter-search input,
    .filter-company--select {
      width: 100%;
    }

    .filter-color-style {
      justify-content: flex-start;
    }
  }
`;

export default FilterSection