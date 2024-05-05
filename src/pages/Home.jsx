import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/countryApi';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const countries = await getCountries();
        setCountries(countries);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

  return (
    <Section>
      <Container>
        {loading && <Loader />}
        {error && <Heading title={error} />}
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
