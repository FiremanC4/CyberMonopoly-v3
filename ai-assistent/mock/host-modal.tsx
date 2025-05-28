export interface GameInterface {
  id: string;
  type: 'host' | 'connect';
  title: string;
  nickname: string;
  inputLabel: string;
  inputPlaceholder: string;
  primaryButtonText: string;
  primaryButtonColor: string;
  availableActions: string[];
  hasBackButton: boolean;
  description?: string;
}

export const gameInterfacesMockData: GameInterface[] = [
  {
    id: 'host-interface-1',
    type: 'host',
    title: 'Host',
    nickname: 'NoName',
    inputLabel: 'Ready to play',
    inputPlaceholder: 'Enter game content, rules, or settings...',
    primaryButtonText: 'Start',
    primaryButtonColor: '#e91e63',
    availableActions: ['Host', 'Connect'],
    hasBackButton: true,
    description: 'Create and host a new game session'
  },
  {
    id: 'connect-interface-1', 
    type: 'connect',
    title: 'Connect',
    nickname: 'NoName',
    inputLabel: 'Accessible rooms',
    inputPlaceholder: 'Enter room code or select from available rooms...',
    primaryButtonText: 'Connect',
    primaryButtonColor: '#e91e63',
    availableActions: ['Host', 'Connect'],
    hasBackButton: true,
    description: 'Join an existing game session'
  }
];


export interface GameRoom {
  id: string;
  name: string;
  host: string;
  players: number;
  maxPlayers: number;
  status: 'waiting' | 'playing' | 'finished';
  gameType: string;
  isPrivate: boolean;
  roomCode?: string;
}

export const mockGameRooms: GameRoom[] = [
  {
    id: 'room-001',
    name: 'Epic Adventure',
    host: 'GameMaster42',
    players: 3,
    maxPlayers: 6,
    status: 'waiting',
    gameType: 'RPG',
    isPrivate: false
  },
  {
    id: 'room-002', 
    name: 'Quick Match',
    host: 'SpeedRunner',
    players: 2,
    maxPlayers: 4,
    status: 'playing',
    gameType: 'Action',
    isPrivate: false
  },
  {
    id: 'room-003',
    name: 'Private Session',
    host: 'NoName',
    players: 1,
    maxPlayers: 8,
    status: 'waiting',
    gameType: 'Strategy',
    isPrivate: true,
    roomCode: 'ABC123'
  },
  {
    id: 'room-004',
    name: 'Tournament Finals',
    host: 'ProPlayer99',
    players: 6,
    maxPlayers: 6,
    status: 'playing',
    gameType: 'Competition',
    isPrivate: false
  }
];

export interface User {
  id: string;
  nickname: string;
  avatar?: string;
  level: number;
  gamesPlayed: number;
  winRate: number;
  isOnline: boolean;
  preferences: {
    theme: 'dark' | 'light';
    notifications: boolean;
    autoJoin: boolean;
  };
}

export const mockUsers: User[] = [
  {
    id: 'user-001',
    nickname: 'NoName',
    level: 1,
    gamesPlayed: 0,
    winRate: 0,
    isOnline: true,
    preferences: {
      theme: 'dark',
      notifications: true,
      autoJoin: false
    }
  },
  {
    id: 'user-002',
    nickname: 'GameMaster42',
    level: 15,
    gamesPlayed: 247,
    winRate: 73.2,
    isOnline: true,
    preferences: {
      theme: 'dark',
      notifications: true,
      autoJoin: true
    }
  },
  {
    id: 'user-003',
    nickname: 'SpeedRunner',
    level: 23,
    gamesPlayed: 156,
    winRate: 89.1,
    isOnline: true,
    preferences: {
      theme: 'light',
      notifications: false,
      autoJoin: false
    }
  }
];

// data/mockGameSettings.ts - Налаштування гри
export interface GameSettings {
  id: string;
  name: string;
  category: string;
  defaultSettings: {
    maxPlayers: number;
    timeLimit: number; // в хвилинах
    difficulty: 'easy' | 'medium' | 'hard';
    isRanked: boolean;
  };
  customSettings: Record<string, any>;
}

export const mockGameSettings: GameSettings[] = [
  {
    id: 'game-rpg-001',
    name: 'Fantasy Adventure',
    category: 'RPG',
    defaultSettings: {
      maxPlayers: 6,
      timeLimit: 120,
      difficulty: 'medium',
      isRanked: false
    },
    customSettings: {
      allowMagic: true,
      startingLevel: 1,
      enablePvP: false
    }
  },
  {
    id: 'game-action-001',
    name: 'Battle Arena',
    category: 'Action',
    defaultSettings: {
      maxPlayers: 4,
      timeLimit: 15,
      difficulty: 'hard',
      isRanked: true
    },
    customSettings: {
      weaponSpawns: true,
      mapRotation: true,
      killLimit: 20
    }
  }
];

export const allMockData = {
  interfaces: gameInterfacesMockData,
  rooms: mockGameRooms,
  users: mockUsers,
  gameSettings: mockGameSettings
};

export default allMockData;