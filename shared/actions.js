module.exports = {
  // sockets
  SOCKET_REQUEST_CONNECT: 'user/SOCKET_REQUEST_CONNECT',
  SOCKET_AUTH_ERROR: 'user/SOCKET_AUTH_ERROR',
  // library
  LIBRARY_FILTER_STRING: 'library/FILTER_KEYWORD',
  LIBRARY_FILTER_STRING_RESET: 'library/FILTER_KEYWORD_CLEAR',
  LIBRARY_FILTER_TOGGLE_STARRED: 'library/TOGGLE_FILTER_STARRED',
  TOGGLE_ARTIST_EXPANDED: 'library/TOGGLE_ARTIST_EXPANDED',
  TOGGLE_ARTIST_RESULT_EXPANDED: 'library/TOGGLE_ARTIST_RESULT_EXPANDED',
  SCROLL_ARTISTS: 'library/SCROLL_ARTISTS',
  LIBRARY_SONG_INFO_REQUEST: 'library/SONG_INFO_REQUEST',
  LIBRARY_SONG_INFO_CLOSE: 'library/SONG_INFO_CLOSE',
  SONG_STARRED: 'library/SONG_STARRED',
  SONG_UNSTARRED: 'library/SONG_UNSTARRED',
  STAR_COUNTS_PUSH: 'library/STAR_COUNTS_PUSH',
  LIBRARY_PUSH: 'library/PUSH',
  LIBRARY_PUSH_SONG: 'library/PUSH_SONG',
  // queue
  QUEUE_PUSH: 'queue/PUSH',
  QUEUE_ADD: 'server/QUEUE_ADD',
  QUEUE_REMOVE: 'server/QUEUE_REMOVE',
  // player commands
  PLAYER_PLAY_REQUEST: 'server/PLAYER_PLAY_REQUEST',
  PLAYER_PAUSE_REQUEST: 'server/PLAYER_PAUSE_REQUEST',
  PLAYER_NEXT_REQUEST: 'server/PLAYER_NEXT_REQUEST',
  PLAYER_VOLUME_REQUEST: 'server/PLAYER_VOLUME_REQUEST',
  PLAYER_BG_ALPHA_REQUEST: 'server/PLAYER_BG_ALPHA_REQUEST',
  PLAYER_VISUALIZER_REQUEST: 'server/PLAYER_VISUALIZER_REQUEST',
  PLAYER_VISUALIZER_PRESET_REQUEST: 'server/PLAYER_VISUALIZER_PRESET_REQUEST',
  // from server to player
  PLAYER_NEXT: 'player/NEXT',
  PLAYER_PAUSE: 'player/PAUSE',
  PLAYER_PLAY: 'player/PLAY',
  PLAYER_VOLUME: 'player/VOLUME',
  PLAYER_BG_ALPHA: 'player/BG_ALPHA',
  PLAYER_VISUALIZER: 'player/VISUALIZER',
  PLAYER_VISUALIZER_PRESET: 'player/VISUALIZER_PRESET',
  // from player to server
  PLAYER_STATUS_REQUEST: 'server/PLAYER_STATUS_REQUEST',
  PLAYER_ERROR_REQUEST: 'server/PLAYER_ERROR_REQUEST',
  PLAYER_LEAVE_REQUEST:  'server/PLAYER_LEAVE_REQUEST',
  // from server to clients
  PLAYER_STATUS: 'status/PLAYER_STATUS',
  PLAYER_ERROR: 'status/PLAYER_ERROR',
  PLAYER_LEAVE: 'status/PLAYER_LEAVE',
  // player informational
  PLAYER_MEDIA_ELEMENT_CHANGE: 'player/MEDIA_CHANGE',
  PLAYER_MEDIA_REQUEST: 'player/MEDIA_REQUEST',
  PLAYER_MEDIA_REQUEST_SUCCESS: 'player/MEDIA_REQUEST_SUCCESS',
  PLAYER_MEDIA_REQUEST_ERROR: 'player/MEDIA_REQUEST_ERROR',
  // user
  LOGIN: 'user/LOGIN',
  LOGOUT: 'user/LOGOUT',
  CREATE_ACCOUNT: 'user/CREATE_ACCOUNT',
  UPDATE_ACCOUNT: 'user/UPDATE_ACCOUNT',
  REQUEST_ACCOUNT: 'user/REQUEST_ACCOUNT',
  REQUEST_ROOMS: 'rooms/REQUEST_ROOMS',
  ROOM_UPDATE: 'rooms/UPDATE',
  ROOM_CREATE: 'rooms/CREATE',
  ROOM_REMOVE: 'rooms/REMOVE',
  ROOM_EDITOR_OPEN: 'rooms/EDITOR_OPEN',
  ROOM_EDITOR_CLOSE: 'rooms/EDITOR_CLOSE',
  STAR_SONG: 'server/STAR_SONG',
  UNSTAR_SONG: 'server/UNSTAR_SONG',
  STARS_PUSH: 'user/STARS_PUSH',
  // misc
  _SUCCESS: '_SUCCESS',
  _ERROR: '_ERROR',
  // prefs
  PREFS_REQUEST: 'prefs/REQUEST',
  PREFS_SET: 'prefs/SET',
  PREFS_RECEIVE: 'prefs/RECEIVE',
  PREFS_REQUEST_SCAN: 'prefs/REQUEST_SCAN',
  PREFS_REQUEST_SCAN_CANCEL: 'prefs/REQUEST_SCAN_CANCEL',
  // ui
  HEADER_HEIGHT_CHANGE: 'ui/HEADER_HEIGHT_CHANGE',
  FOOTER_HEIGHT_CHANGE: 'ui/FOOTER_HEIGHT_CHANGE',
  SHOW_ERROR_MESSAGE: 'ui/SHOW_ERROR_MESSAGE',
  CLEAR_ERROR_MESSAGE: 'ui/CLEAR_ERROR_MESSAGE',
  // IPC messages
  SCANNER_WORKER_SCAN: 'scannerWorker/SCAN',
  SCANNER_WORKER_STATUS: 'scannerWorker/STATUS',
  SCANNER_WORKER_DONE: 'scannerWorker/DONE',
  SERVER_WORKER_STATUS: 'serverWorker/STATUS',
  SERVER_WORKER_ERROR: 'serverWorker/ERROR',
  MEDIA_ADD: 'scannerWorker/MEDIA_ADD',
  MEDIA_CLEANUP: 'scannerWorker/MEDIA_CLEANUP',
  MEDIA_REMOVE: 'scannerWorker/MEDIA_REMOVE',
  MEDIA_UPDATE: 'scannerWorker/MEDIA_UPDATE',
}
