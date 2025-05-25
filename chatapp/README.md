# WebSocket Chat Server

## Architecture Overview
The server implements a persistent WebSocket connection layer that:
- Maintains connection state for all clients
- Routes messages to appropriate rooms
- Handles connection lifecycle events
- Provides real-time user presence data

## Core Components

### Connection Manager
- Handshake validation
- Connection state tracking
- Heartbeat/ping monitoring
- Graceful disconnect handling

### Message Broker
- Message validation
- Room-based routing
- Broadcast/unicast delivery
- Rate limiting

### Data Models
```typescript
interface User {
  id: string;
  name: string;
  socket: WebSocket;
  rooms: Set<string>;
  lastActive: Date;
}

interface ChatRoom {
  id: string;
  name: string;
  participants: Set<string>;
  messageHistory: ChatMessage[];
}

interface ChatMessage {
  type: 'message' | 'system' | 'notification';
  content: string;
  sender: string;
  timestamp: Date;
  room?: string;
}
```

## Directory Structure
```
chatapp/
├── src/
│   ├── server.ts     # WebSocket server setup
│   ├── handlers/    # Message handlers
│   ├── models/      # Data models
│   └── utils/       # Utility functions
└── dist/            # Compiled JavaScript
```

## Core Features
- **WebSocket Server**
  - Handles 100+ concurrent connections
  - Tracks online users
  - Manages chat rooms

- **Message Handling**
  - Broadcasts messages to rooms
  - Stores message history
  - Handles user join/leave events
