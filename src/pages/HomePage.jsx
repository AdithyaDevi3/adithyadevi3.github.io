import { useState } from 'react';
import CrystalBackground from '../components/CrystalBackground';
import CampaignCardModal from '../components/CampaignCardModal';
import LandingCampaignMap from '../components/LandingCampaignMap';

function HomePage() {
  const [selectedNode, setSelectedNode] = useState(null);

  return (
    <>
      <CrystalBackground />

      <LandingCampaignMap
        selectedNodeId={selectedNode?.id}
        onSelectNode={setSelectedNode}
      />

      {selectedNode && (
        <CampaignCardModal
          item={selectedNode}
          onClose={() => setSelectedNode(null)}
        />
      )}
    </>
  );
}

export default HomePage;