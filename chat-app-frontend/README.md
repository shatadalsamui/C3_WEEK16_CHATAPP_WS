# React Chat Client

## Application Architecture
The frontend implements a reactive UI that:
- Maintains WebSocket connection state
- Manages local message cache
- Provides real-time UI updates
- Handles user interactions

## Core Components

### Connection Management
- WebSocket connection lifecycle
- Automatic reconnection logic
- Connection status indicators
- Error handling and recovery

### Chat Interface
```typescript
interface Message {
  id: string;
  content: string;
  sender: string;
  timestamp: Date;
  status: 'sent' | 'delivered' | 'read';
}

interface Room {
  id: string;
  name: string;
  unreadCount: number;
  lastMessage?: Message;
}
```

### State Management
- Message history cache
- Online user tracking
- Room selection state
- UI theme preferences

## Directory Structure
```
chat-app-frontend/
├── src/
│   ├── components/    # React components
│   │   ├── Chat/     # Chat UI components
│   │   ├── Users/    # Online users list
│   │   └── Rooms/    # Room selection
│   ├── hooks/        # Custom hooks
│   │   └── useChat.js
│   ├── styles/       # Tailwind CSS
│   └── App.tsx       # Main application
```

## Core Features
1. **WebSocket Integration**
   - Real-time message updates
   - Connection status indicators
   - Automatic reconnection

2. **Chat Interface**
   - Message history display
   - Responsive message bubbles
   - Typing indicators

3. **User Management**
   - Online user tracking
   - User presence notifications
   - Room selection UI

## Tailwind Configuration
- Dark mode support
- Responsive breakpoints
- Custom chat bubble styling
