import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_PERSON } from '../client/queries';
import { GeneralInfoRows, VehiclesInfoRow } from '../components/DetailsRow';
import Loader from '../components/Loader';

const DetailsSection = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PERSON, {
    variables: {
      id,
    },
  });

  if (loading) return <Loader />;
  if (error) return <p className="error">Failed to Load Data</p>;

  const { person } = data;
  const { vehicles } = person.vehicleConnection;

  return (
    <section className="details-section">
      <h2 className="details-subtitle">General Information</h2>
      <GeneralInfoRows
        eyeColor={person.eyeColor}
        hairColor={person.hairColor}
        skinColor={person.skinColor}
        birthYear={person.birthYear}
      />
      <h2 className="details-subtitle">Vehicles</h2>
      <ul className="details-list">
        {vehicles.length >= 1 ? (
          vehicles.map((vehicle) => <VehiclesInfoRow key={vehicle.id} name={vehicle.name} />)
        ) : (
          <p>None</p>
        )}
      </ul>
    </section>
  );
};

export default DetailsSection;
