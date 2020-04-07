RMDIR /S /Q .\build .\functions\build
npm run build
MKDIR .\functions\build
XCOPY /S /Q .\build .\functions\build
REPLACE .\build\service-worker.js .\public
firebase deploy