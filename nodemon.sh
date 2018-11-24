PID=$(ps aux | grep ts-node | sed -n '2p' | awk '{print $2}');

if [ ! -z "$PID" ]; then
  { kill $PID && wait $PID; } 2>/dev/null;
fi;