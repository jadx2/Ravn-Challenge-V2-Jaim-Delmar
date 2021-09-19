import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_PERSON } from '../client/queries';
import { GeneralInfoRows, VehiclesInfoRow } from '../components/DetailsRow';

const DetailsSection = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PERSON, {
    variables: {
      id,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Failed to Load Data</p>;

  const { person } = data;
  const { vehicles } = person.vehicleConnection;

  return (
    <div>
      <h1>General Information</h1>
      <GeneralInfoRows
        eyeColor={person.eyeColor}
        hairColor={person.hairColor}
        skinColor={person.skinColor}
        birthYear={person.birthYear}
      />
      <h1>Vehicles</h1>
      <ul>
        {vehicles.length >= 1 ? (
          vehicles.map((vehicle) => <VehiclesInfoRow key={vehicle.id} name={vehicle.name} />)
        ) : (
          <p>None</p>
        )}
      </ul>
    </div>
  );
};

export default DetailsSection;