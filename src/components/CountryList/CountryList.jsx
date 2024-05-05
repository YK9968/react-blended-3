import { Link, useLocation } from 'react-router-dom';
import { Grid, GridItem } from '..';

export const CountryList = ({ countries }) => {
  const location = useLocation();

  return (
    <>
      <Grid>
        {countries.map(country => (
          <GridItem key={country.id}>
            <Link to={`/country/${country.id}`} state={location}>
              <img src={country.flag} alt={country.country} />
            </Link>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
