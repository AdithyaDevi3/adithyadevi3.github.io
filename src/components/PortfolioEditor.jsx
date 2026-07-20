import { addProjectToEntry, createConnection, createPortfolioEntry, removeConnection, removePortfolioEntry, removeProject, reorderPortfolioEntry, updateConnection, updatePortfolioEntry, updateProject } from '../data/portfolioData';

function PortfolioEditor({ entries, connections, onEntriesChange, onConnectionsChange }) {
  const updateEntry = (entryId, updates) => {
    onEntriesChange(updatePortfolioEntry(entries, entryId, updates));
  };

  const updateEntryTechs = (entryId, value) => {
    const technologies = value
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);
    updateEntry(entryId, { technologies });
  };

  return (
    <div style={{ marginTop: 16, border: '1px solid rgba(102, 232, 255, 0.16)', borderRadius: 16, padding: 16, background: 'rgba(3, 10, 24, 0.76)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, gap: 12, flexWrap: 'wrap' }}>
        <div>
          <p style={{ margin: 0, color: '#70d8ff', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: 11 }}>Universe Editor</p>
          <h3 style={{ margin: '4px 0 0', color: '#f3fcff', fontSize: 18 }}>Customize the galaxy</h3>
        </div>
        <button
          type="button"
          onClick={() => onEntriesChange([...entries, createPortfolioEntry()])}
          style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid rgba(102,232,255,0.2)', background: 'rgba(95, 209, 255, 0.14)', color: '#f3fcff', cursor: 'pointer', whiteSpace: 'normal', overflowWrap: 'break-word' }}
        >
          Add Company Star
        </button>
      </div>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
        <button type="button" onClick={() => onConnectionsChange([...connections, createConnection()])} style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid rgba(102,232,255,0.2)', background: 'rgba(95, 209, 255, 0.14)', color: '#f3fcff', cursor: 'pointer', whiteSpace: 'normal', overflowWrap: 'break-word' }}>Add Route</button>
      </div>

      <div style={{ display: 'grid', gap: 12 }}>
        {connections.map((connection) => (
          <div key={connection.id} style={{ border: '1px solid rgba(102, 232, 255, 0.14)', borderRadius: 14, padding: 12, background: 'rgba(255,255,255,0.03)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
              <strong style={{ color: '#f3fcff' }}>Route</strong>
              <button type="button" onClick={() => onConnectionsChange(removeConnection(connections, connection.id))} style={{ padding: '4px 8px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,88,88,0.12)', color: '#ffd7d7', cursor: 'pointer', whiteSpace: 'normal', overflowWrap: 'break-word' }}>Remove</button>
            </div>
            <div style={{ display: 'grid', gap: 8, marginTop: 8 }}>
              <label style={{ display: 'grid', gap: 4, color: '#9ed9ff', fontSize: 13 }}>
                From Star
                <select value={connection.fromId} onChange={(event) => onConnectionsChange(updateConnection(connections, connection.id, { fromId: event.target.value }))} style={{ padding: '8px 10px', borderRadius: 10, border: '1px solid rgba(102,232,255,0.16)', background: 'rgba(2,8,20,0.7)', color: '#f3fcff' }}>
                  <option value="">Select star</option>
                  {entries.map((entry) => <option key={entry.id} value={entry.id}>{entry.name}</option>)}
                </select>
              </label>
              <label style={{ display: 'grid', gap: 4, color: '#9ed9ff', fontSize: 13 }}>
                To Star
                <select value={connection.toId} onChange={(event) => onConnectionsChange(updateConnection(connections, connection.id, { toId: event.target.value }))} style={{ padding: '8px 10px', borderRadius: 10, border: '1px solid rgba(102,232,255,0.16)', background: 'rgba(2,8,20,0.7)', color: '#f3fcff' }}>
                  <option value="">Select star</option>
                  {entries.map((entry) => <option key={entry.id} value={entry.id}>{entry.name}</option>)}
                </select>
              </label>
              <label style={{ display: 'grid', gap: 4, color: '#9ed9ff', fontSize: 13 }}>
                Route Color
                <input type="color" value={connection.color} onChange={(event) => onConnectionsChange(updateConnection(connections, connection.id, { color: event.target.value }))} style={{ padding: 0, borderRadius: 10, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(2,8,20,0.7)', height: 36 }} />
              </label>
            </div>
          </div>
        ))}

        {entries.map((entry, index) => (
          <div key={entry.id} style={{ border: '1px solid rgba(102, 232, 255, 0.14)', borderRadius: 14, padding: 12, background: 'rgba(255,255,255,0.03)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
              <strong style={{ color: '#f3fcff' }}>{entry.name}</strong>
              <div style={{ display: 'flex', gap: 8 }}>
                <button type="button" onClick={() => onEntriesChange(reorderPortfolioEntry(entries, entry.id, -1))} disabled={index === 0} style={{ padding: '6px 8px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)', color: '#f3fcff', cursor: index === 0 ? 'not-allowed' : 'pointer', opacity: index === 0 ? 0.6 : 1 }}>↑</button>
                <button type="button" onClick={() => onEntriesChange(reorderPortfolioEntry(entries, entry.id, 1))} disabled={index === entries.length - 1} style={{ padding: '6px 8px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)', color: '#f3fcff', cursor: index === entries.length - 1 ? 'not-allowed' : 'pointer', opacity: index === entries.length - 1 ? 0.6 : 1 }}>↓</button>
                <button type="button" onClick={() => onEntriesChange(removePortfolioEntry(entries, entry.id))} style={{ padding: '6px 8px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,88,88,0.12)', color: '#ffd7d7', cursor: 'pointer', whiteSpace: 'normal', overflowWrap: 'break-word' }}>Delete</button>
              </div>
            </div>

            <div style={{ display: 'grid', gap: 8, marginTop: 10 }}>
              <label style={{ display: 'grid', gap: 4, color: '#9ed9ff', fontSize: 13 }}>
                Name
                <input value={entry.name} onChange={(event) => updateEntry(entry.id, { name: event.target.value })} style={{ padding: '8px 10px', borderRadius: 10, border: '1px solid rgba(102,232,255,0.16)', background: 'rgba(2,8,20,0.7)', color: '#f3fcff' }} />
              </label>
              <label style={{ display: 'grid', gap: 4, color: '#9ed9ff', fontSize: 13 }}>
                Period
                <input value={entry.period} onChange={(event) => updateEntry(entry.id, { period: event.target.value })} style={{ padding: '8px 10px', borderRadius: 10, border: '1px solid rgba(102,232,255,0.16)', background: 'rgba(2,8,20,0.7)', color: '#f3fcff' }} />
              </label>
              <label style={{ display: 'grid', gap: 4, color: '#9ed9ff', fontSize: 13 }}>
                Summary
                <textarea value={entry.summary} onChange={(event) => updateEntry(entry.id, { summary: event.target.value })} rows={2} style={{ padding: '8px 10px', borderRadius: 10, border: '1px solid rgba(102,232,255,0.16)', background: 'rgba(2,8,20,0.7)', color: '#f3fcff' }} />
              </label>
              <label style={{ display: 'grid', gap: 4, color: '#9ed9ff', fontSize: 13 }}>
                Technologies
                <input value={entry.technologies.join(', ')} onChange={(event) => updateEntryTechs(entry.id, event.target.value)} style={{ padding: '8px 10px', borderRadius: 10, border: '1px solid rgba(102,232,255,0.16)', background: 'rgba(2,8,20,0.7)', color: '#f3fcff' }} />
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 8 }}>
                <label style={{ display: 'grid', gap: 4, color: '#9ed9ff', fontSize: 13 }}>
                  Star Color
                  <input type="color" value={entry.color} onChange={(event) => updateEntry(entry.id, { color: event.target.value })} style={{ padding: 0, borderRadius: 10, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(2,8,20,0.7)', height: 36 }} />
                </label>
                <label style={{ display: 'grid', gap: 4, color: '#9ed9ff', fontSize: 13 }}>
                  Accent
                  <input type="color" value={entry.accent} onChange={(event) => updateEntry(entry.id, { accent: event.target.value })} style={{ padding: 0, borderRadius: 10, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(2,8,20,0.7)', height: 36 }} />
                </label>
                <label style={{ display: 'grid', gap: 4, color: '#9ed9ff', fontSize: 13 }}>
                  Orbit Radius
                  <input type="range" min="3" max="13" step="0.1" value={entry.orbitRadius} onChange={(event) => updateEntry(entry.id, { orbitRadius: Number(event.target.value) })} />
                </label>
                <label style={{ display: 'grid', gap: 4, color: '#9ed9ff', fontSize: 13 }}>
                  Orbit Speed
                  <input type="range" min="0.05" max="0.35" step="0.01" value={entry.orbitSpeed} onChange={(event) => updateEntry(entry.id, { orbitSpeed: Number(event.target.value) })} />
                </label>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <span style={{ color: '#70d8ff', textTransform: 'uppercase', letterSpacing: '0.16em', fontSize: 11 }}>Project Moons</span>
                  <button type="button" onClick={() => onEntriesChange(addProjectToEntry(entries, entry.id, { name: 'New Moon', summary: 'Add a new achievement or project.' }))} style={{ padding: '6px 10px', borderRadius: 8, border: '1px solid rgba(102,232,255,0.16)', background: 'rgba(95, 209, 255, 0.14)', color: '#f3fcff', cursor: 'pointer', whiteSpace: 'normal', overflowWrap: 'break-word' }}>Add Moon</button>
                </div>
                <div style={{ display: 'grid', gap: 8 }}>
                  {entry.projects.map((project, projectIndex) => (
                    <div key={`${entry.id}-${projectIndex}`} style={{ padding: 10, borderRadius: 12, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, alignItems: 'center' }}>
                        <span style={{ color: '#f3fcff', fontWeight: 600 }}>{project.name}</span>
                        <button type="button" onClick={() => onEntriesChange(removeProject(entries, entry.id, projectIndex))} style={{ padding: '4px 8px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,88,88,0.12)', color: '#ffd7d7', cursor: 'pointer', whiteSpace: 'normal', overflowWrap: 'break-word' }}>Remove</button>
                      </div>
                      <div style={{ display: 'grid', gap: 8, marginTop: 8 }}>
                        <input value={project.name} onChange={(event) => onEntriesChange(updateProject(entries, entry.id, projectIndex, { name: event.target.value }))} style={{ padding: '8px 10px', borderRadius: 10, border: '1px solid rgba(102,232,255,0.16)', background: 'rgba(2,8,20,0.7)', color: '#f3fcff' }} />
                        <textarea value={project.summary} onChange={(event) => onEntriesChange(updateProject(entries, entry.id, projectIndex, { summary: event.target.value }))} rows={2} style={{ padding: '8px 10px', borderRadius: 10, border: '1px solid rgba(102,232,255,0.16)', background: 'rgba(2,8,20,0.7)', color: '#f3fcff' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioEditor;
