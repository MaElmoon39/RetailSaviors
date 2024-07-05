# Segmentación de clientes para una página de venta por web 🛒

En un mundo donde las empresas dependen cada vez más de los datos para tomar decisiones estratégicas, la capacidad de segmentar clientes de manera efectiva se vuelve crucial. La segmentación de clientes permite a las empresas personalizar sus estrategias de marketing, mejorar la retención de clientes y maximizar el valor del cliente a lo largo del tiempo.

Nuestro objetivo es desarrollar una aplicación web interactiva que permita a los científicos de datos realizar análisis de segmentación de clientes utilizando el modelo RFM (Recencia, Frecuencia, Valor Monetario). La aplicación proporcionará herramientas para cargar datos, realizar análisis exploratorio y visualizar resultados de segmentación mediante gráficos interactivos.

El trabajo se compondrá de un notebook donde se realiza el preprocesamiento de los datos 🧰 aplicandos técnicas para tratar números duplicados, valores nulos, creación de nuevas columnas, se realiza una EDA 📊 para ver lo que podemos obtener de los datos cómo cantidad de compras por mes, por horario, por día entre otros.
Finalmente se realiza un modelo no supervisado (K-means)🤖 con la intención de crear segmentos de clientes para poder retenerlos o cautivarlos mediante estrategías de marketing.

# Conclusión 
Obtivimos una tabla con 4 segmentos que se muestra a continuación:

![image](https://github.com/MaElmoon39/RetailSaviors/assets/132926660/6deffac4-3e43-4af4-af65-896347835822)

En donde:
* El grupo 1: Catalogado como los clientes 'Platinum', ya que tienen un tiempo corto de compra, con mucha compras y un gasto elevado.
* El grupo 3: Catalogado como los clientes 'Gold', tardan un poquito más en comprar con alta frecuencia y tambien gastan mucho.
* El grupo 2: Catalogado como los clientes 'Silver', que tardan más en comprar con frecuencia, compran menores cantidades y gastan mucho menos respecto a los grupos 1 y 3.
* El grupo 0: Catalogado como los cliente 'Basic', son clientes que no se han cuativado tanto por los productos que se ofrecen o alguna otra situación.
