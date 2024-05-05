import {
  Container,
  CountryList,
  Heading,
  Loader,
  SearchForm,
  Section,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service';

export const SearchCountry = () => {
  const [searchParams, setSearchParams] = useSearchParams('');
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const region = searchParams.get('region');
    if (!region) {
      return;
    }
    const fetchRegion = async () => {
      try {
        setLoading(true);
        const countries = await fetchByRegion(region);
        setCountries(countries);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    };
    fetchRegion();
  }, [searchParams]);
  const onSubmit = region => {
    setSearchParams({ region });
    setError(false);
  };
  return (
    <Section>
      <Container>
        {loading && <Loader />}
        {error && <Heading title={error} />}
        <SearchForm onSubmit={onSubmit} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
