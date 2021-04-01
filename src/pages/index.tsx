import Page from "../components/Page";
import CardComponent from "../components/Card";
import { Container, Columns } from "react-bulma-components";
import Card from "../components/Card";
import { gql, useQuery } from "@apollo/client";

const query = gql`
  query {
    launches {
      id
      mission_name
      details
      launch_date_utc
      links {
        mission_patch
        mission_patch_small
      }
    }
  }
`;

type Launch = {
  id: string;
  mission_name: string;
  details: string;
  launch_date_utc: string;
  links: {
    mission_patch: string;
    mission_patch_small: string;
  };
};

type QueryInterface = {
  launches: Launch[];
};

const Index = () => {
  const { data, error, loading } = useQuery<QueryInterface>(query);

  const launches = data?.launches ?? [];

  if (loading) {
    return (
      <iframe
        src="https://giphy.com/embed/0Y0ySEj13sU1O1IQ23"
        width="480"
        height="480"
        style={{
          position: "absolute",
          height: 100 + "%",
          width: 100 + "%",
          top: 0 + "px",
          left: 0 + "px",
          right: 0 + "px",
          bottom: 0 + "px",
        }}
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      ></iframe>
    );
  }

  return (
    <Container>
      <Columns style={{ marginTop: 40 }}>
        {launches.map((launch) => (
          <Columns.Column key={launch.id} size={4}>
            <Card
              title={launch.mission_name}
              avatar={launch.links.mission_patch_small}
              description={launch.details}
              image_placeholder={launch.links.mission_patch}
              timestamp={launch.launch_date_utc}
            />
          </Columns.Column>
        ))}
      </Columns>
    </Container>
  );
};

export default Index;
