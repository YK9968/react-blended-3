import {
  Container,
  CountryInfo,
  Section,
  Loader,
  Heading,
  GoBackBtn,
} from 'components';
import { useEffect, useState, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service';

export const Country = () => {
  const [countryInfo, setCountryInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { countryId } = useParams();
  const location = useLocation();
  const goBack = useRef(location.state ?? '/');

  useEffect(() => {
    const fetchCountryInfo = async () => {
      try {
        setLoading(true);
        const country = await fetchCountry(countryId);
        setCountryInfo(country);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    };
    fetchCountryInfo();
  }, [countryId]);

  return (
    <Section>
      <Container>
        <GoBackBtn path={goBack.current} />
        {loading && <Loader />}
        {error && <Heading title={error} />}
        {countryInfo && <CountryInfo {...countryInfo} />}
      </Container>
    </Section>
  );
};
