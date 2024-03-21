import React, { useState, useRef, useCallback } from 'react';
import StatisticsChart from '../StatisticsChart';
import ReactFlow, {
  Edge,
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background
} from 'reactflow';
import 'reactflow/dist/style.css';

import Sidebar from './sidebar';

import './style.css';

const initialNodes = [

  {
    id: '1',
    type: 'input',
    data: { label: 'Car' },
    position: { x: 2000, y: 0 },
  },
  {
    id: '2',
   
    data: { label: 'Research' },
    position: { x: 200, y: 150 },
  },
  {
    id: '3',
   
    data: { label: 'Planning' },
    position: { x: 1000, y: 150 },
  },
  {
    id: '4',
   
    data: { label: 'Desiging' },
    position: { x:1800, y: 150 },
  },
  {
    id: '5',
   
    data: { label: 'Manufacturing' },
    position: { x: 2600, y: 150 },
  },
  {
    id: '6',
    data: { label: 'Sales/Marketing' },
    position: { x: 3400, y: 150 },
  },
  {
    id: '7',
    data: { label: 'External' },
    targetPosition: 'right',
    position: { x: 0, y: 250 },
  },
  {
    id: '8',
    data: { label: 'Internal' },
    sourcePosition: 'right',
    targetPosition: 'left',
    position: { x: 400, y: 250 },
  },
  {
    id: '9',
    data: { label: 'PRD' },
    sourcePosition: 'left',
    targetPosition: 'right',
    position: { x: 800, y: 250 },
  },
  {
    id: '10',
    data: { label: 'Specs' },
    sourcePosition: 'right',
    targetPosition: 'left',
    position: { x: 1200, y: 250 },
  },
  {
    id: '11',
    data: { label: 'Hardware' },
    sourcePosition: 'left',
    targetPosition: 'right',
    position: { x: 1600, y: 250 },
  },
  {
    id: '12',
    data: { label: 'Software' },
    sourcePosition: 'right',
    targetPosition: 'left',
    position: { x: 2000, y: 250 },
  },
  {
    id: '13',
    data: { label: 'Material' },
    sourcePosition: 'left',
    targetPosition: 'right',
    position: { x: 2400, y: 250 },
  },
  {
    id: '14',
    data: { label: 'Production' },
    sourcePosition: 'right',
    targetPosition: 'left',
    position: { x: 2800, y: 250 },
  },
  {
    id: '15',
    data: { label: 'Online' },
    sourcePosition: 'left',
    targetPosition: 'right',
    position: { x: 3200, y: 250 },
  },
  {
    id: '16',
    data: { label: 'Dealership' },
    sourcePosition: 'right',
    targetPosition: 'left',
    position: { x: 3600, y: 250 },
  },
  {
    id: '17',
    data: { label: 'B2C' },
    position: { x: 0, y: 350 },
  },
  {
    id: '18',
    data: { label: 'B2C' },
    position: { x: 400, y: 350 },
  },
  {
    id: '19',
    data: { label: 'Online' },
    sourcePosition: 'left',
    targetPosition: 'right',
    position: { x: 0, y: 500 },
  },
  {
    id: '20',
    data: { label: 'Interview' },
    sourcePosition: 'left',
    targetPosition: 'right',
    position: { x: 0, y: 600 },
  },
  {
    id: '21',
    data: { label: 'Public Data' },
    sourcePosition: 'left',
    targetPosition: 'right',
    position: { x: 0, y: 700 },
  },
  {
    id: '22',
    data: { label: 'Health' },
    sourcePosition: 'left',
    targetPosition: 'right',
    position: { x: 0, y: 800 },
  },
];
const initialEdges = [
  {
    id: 'horizontal-e1-2',
    source: '1',
    target: '2',

  },
  {
    id: 'horizontal-e1-3',
    source: '1',
    target: '3',
  
  },
  {
    id: 'horizontal-e1-4',
    source: '1',
    target: '4',
   
  },
  {
    id: 'horizontal-e1-5',
    source: '1',
    target: '5',
   
  },
  {
    id: 'horizontal-e1-6',
    source: '1',
    target: '6',
    
  },
  {
    id: 'horizontal-e2-7',
    source: '2',
    target: '7',
    
  },
  {
    id: 'horizontal-e2-8',
    source: '2',
    target: '8',
    
  },
  {
    id: 'horizontal-e3-9',
    source: '3',
    target: '9',
   
  },
  {
    id: 'horizontal-e3-10',
    source: '3',
    target: '10',
    
  },
  {
    id: 'horizontal-e4-11',
    source: '4',
    target: '11',
    
  },
  {
    id: 'horizontal-e4-12',
    source: '4',
    target: '12',
  },
   
  {
    id: 'horizontal-e5-13',
    source: '5',
    target: '13',
   
  },
  {
    id: 'horizontal-e5-14',
    source: '5',
    target: '14',
   
  },
  {
    id: 'horizontal-e6-15',
    source: '6',
    target: '15',
  },
  {
    id: 'horizontal-e6-16',
    source: '6',
    target: '16',
    
  },
  {
    id: 'horizontal-e7-17',
    source: '7',
    target: '17',
    
  },
  {
    id: 'horizontal-e7-18',
    source: '7',
    target: '18',
    
  },
  {
    id: 'horizontal-e8-19',
    source: '17',
    target: '19',
    
  },
  {
    id: 'horizontal-e8-20',
    source: '17',
    target: '20',
    
  },
  {
    id: 'horizontal-e8-21',
    source: '17',
    target: '21',
    
  },
  {
    id: 'horizontal-e8-22',
    source: '17',
    target: '22',
   
  },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

const DnDFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [hoveredNodeStats, setHoveredNodeStats] = useState(null); // Track stats for the hovered node
  const [selectedNodeLabel, setSelectedNodeLabel] = useState(null);


  const onNodeHover = (event, node) => {
    setSelectedNodeLabel(node.data.label);
    let stats = null;

    if (node.data.label === 'Research') {
      stats = { 'External': 20, 'Internal': 10 }; // Placeholder stats for Car
    } else if (node.data.label === 'Planning') {
      stats = { 'PRD': 15, 'Specs': 25 }; // Placeholder stats for Research
    } else if (node.data.label === 'Desiging') {
      stats = { 'Hardware': 20, 'Software': 30 }; // Placeholder stats for Planning
    }
    else if (node.data.label === 'Manufacturing') {
      stats = { 'Material': 20, 'Production': 30 }; // Placeholder stats for Planning
    } else if (node.data.label === 'Sales/Marketing') {
      stats = { 'Online': 20, 'Dealership': 30 }; // Placeholder stats for Planning
    }

    setHoveredNodeStats(stats);
  };

  const onNodeLeave = (event, node) => {
    setHoveredNodeStats(null); // Clear placeholder stats when mouse leaves a node
  };
  


  //background
  const [variant, setVariant] = useState('lines');

  //update Node 
  const [editValue, setEditValue] = useState(nodes.data)
  const [id, setId] = useState()

  //edit function
  const onNodeClick = (e, val) => {
    setEditValue(val.data.label)
    setId(val.id)

  }
  //handle Change
  const handleChange=(e)=>{
      e.preventDefault();
    setEditValue( e.target.value);
  }
  //handle Function
  const handleEdit =()=>{
    const res=nodes.map((item)=>{
      if(item.id===id){
        item.data={
          ...item.data,
          label:editValue
        }
      }
      return item
    })
    setNodes(res)
    setEditValue('')
  }

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  return (
    <div className="dndflow">
      <div className="updatenode__controls">

        <label>Enter Node Name </label> <br/>
        <input type="text" value={editValue} onChange={handleChange} /><br/>
        <button onClick={handleEdit} className="btn">Update</button><br/>
        {hoveredNodeStats && (
        <div className='hoverData'> 
          {selectedNodeLabel && (
        <div>
          <h2> {selectedNodeLabel}</h2>
        </div>
      )}
          {/* Use StatisticsChart component */}
        <StatisticsChart stats={hoveredNodeStats}  />
        </div>
      )}
      </div>

      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodeClick={(e, val) => onNodeClick(e, val)}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onNodeMouseEnter={onNodeHover}
            onNodeMouseLeave={onNodeLeave}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            style={{ background: '#1A192B' }}
            onDragOver={onDragOver}
            fitView
          >
             
            <Controls />
          </ReactFlow>
        </div>
        <Sidebar />
      </ReactFlowProvider>
    </div>
  );
};

export default DnDFlow;