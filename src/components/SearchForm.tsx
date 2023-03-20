import "./SearchForm.css";
import { FormEvent, useEffect, useState } from "react";
import categories from "../fixtures/categories";
import { getTriviaQuestions } from "../services/TriviaApiService";
import SearchRequest from "../models/SearchRequest";

interface Props {
  setQuestions: any;
}

const SearchForm = ({ setQuestions }: Props) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchParams, setSearchParams] = useState<SearchRequest>({});

  useEffect(() => {
    selectedCategories.length &&
      setSearchParams((prev) => {
        return {
          ...prev,
          categories: selectedCategories.toString(),
        };
      });
  }, [selectedCategories]);

  const setMultipleCategories = (category: string) => {
    if (!selectedCategories.length) {
      setSelectedCategories([category]);
    } else {
      let index = selectedCategories.findIndex((selectedCategory) => {
        return selectedCategory === category;
      });
      index === -1
        ? setSelectedCategories((prev) => [...prev, category])
        : setSelectedCategories((prev) => [
            ...prev.slice(0, index),
            ...prev.slice(index + 1),
          ]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    getTriviaQuestions(searchParams).then((res) => {
      setQuestions(res);
    });
  };

  return (
    <form className='SearchForm' onSubmit={handleSubmit}>
      <p>
        fill out the fields below, or click 'get questions' for 10 random q's
      </p>
      <label className='input'>
        select difficulty:
        <select
          name='difficulty'
          id='difficulty'
          onChange={(e) =>
            setSearchParams({ ...searchParams, difficulty: e.target.value })
          }
        >
          <option value=''>mix</option>
          <option value='easy'>chill</option>
          <option value='medium'>medium</option>
          <option value='hard'>hard</option>
        </select>
      </label>
      <label className='input'>
        select categories:
        <select
          name='categories'
          id='categories'
          multiple={true}
          value={selectedCategories}
          onChange={(e) => setMultipleCategories(e.target.value)}
        >
          {categories.map((category) => {
            <option value=''>select an option</option>;
            return (
              <option value={category} key={category}>
                {category.replace(/_/g, " ")}
              </option>
            );
          })}
        </select>
      </label>
      <label className='input'>
        how many questions do you want to do?
        <select
          name='limit'
          id='limit'
          defaultValue={10}
          onChange={(e) =>
            setSearchParams({
              ...searchParams,
              limit: e.target.value,
            })
          }
        >
          <option value=''>select an option</option>
          <option value='5'>5</option>
          <option value='10'>10</option>
          <option value='15'>15</option>
          <option value='20'>20</option>
        </select>
      </label>
      <button>get questions!</button>
    </form>
  );
};

export default SearchForm;
