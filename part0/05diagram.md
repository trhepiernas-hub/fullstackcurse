```mermaid
sequenceDiagram
    participant U as User
    participant B as Browser
    participant S as Server
    U->>B: Accesses the notes SPA
    B->>S: Requests SPA files
    S-->>B: Sends SPA files
    B->>U: Renders SPA
