# Демо использования утилитарных типов

TypeScript предоставляет полторы дюжины полезных условных типов. Их применение позволяет не только сократить время на выписывание структуры интерфейсов, то и добавляет смысловой контекст для разработчика.

В различных приложениях пользователь новые записи в базе данных. Это может быть бизнес или игра, но в любом случае, часть сведений к записи добавляет сам сервер. Пользователь не заполняет данные о дате получения или обновления, это делает центральный сервер.

## Пример интерфейса и обсуждение вычисляемых полей

В интерфейсе `Message` пользователь может прочитать сведения о дате создания и дате прочтения сообщения. При создании нового сообщения пользователь заполняет не все поля. Приложение самостоятельно инициализирует идентификатор отправителя `from`, а поле - read для отправляемого сообщения не является актуальным.

Представим работу приложения по обмену сообщениями. Один из вариантов реализации хранения состояния такого приложения может быть выполнен в рамках идеологии redux. 

Кстати, redux уже давно содержит необходимые TypeScript-у сведения о типах.
