# Requirements

The app shall be simple and lightweight, meant for a single user.

## Functional requirements
The app needs to be able to:

- Manage hives
    - create, edit, delete
    - show as list
- Manage treatments
    - create, edit, delete
    - show as list
        - change ordering
    - relate treatments to hives

## Graphical requirements
- Easy to use interface
- "La Colomba" logos at login

## Tech stack

- React Native for the frontend
    - AsyncStorage for local data (login data only)
- Storage: Notion API
    - fully web-based (no local DB)