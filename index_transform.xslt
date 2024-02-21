<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
    <html  xmlns="http://www.w3.org/1999/xhtml">
    <head>
    <meta charset="utf-8"/>
    <title>Lego Catalogue</title> 
    <link rel = "stylesheet" href="/Styles/stylesheet.css"/>
  </head>
  <body>
    <h1>Liste des figurines</h1>
    <xsl:for-each select="catalogue/figurine">
        <xsl:variable name="imagePath" select="photos/@chemin"/>
        <xsl:variable name="fig_id" select="@id"/>
        <a href="http://127.0.0.1:5500/Fiches_Figurines/{$fig_id}.xhtml">
            <img src="{$imagePath}" class="img_fig"/>
        </a>
    </xsl:for-each>
  </body>
</html>
</xsl:template>

</xsl:stylesheet>
