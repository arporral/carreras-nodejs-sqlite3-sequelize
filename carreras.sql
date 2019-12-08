CREATE TABLE `carreras` (
  `num_sec` integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  `fecha` date NOT NULL,
  `hora_inicio` time DEFAULT NULL,
  `hora_fin` time DEFAULT NULL,
  `kms` double DEFAULT NULL,
  `recorrido` longtext,
  `tipo_de_ejercicio` varchar(255) DEFAULT NULL,
  `peso` double DEFAULT NULL
)