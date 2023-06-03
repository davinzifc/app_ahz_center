import { ApiInfoDto } from '../globaldto/api-info.dto';
import { UserRoleDto } from '../../auth/user/dto/user-role.dto';

export const userBody = {
  create: (user: UserRoleDto, app: ApiInfoDto) => {
    return `
        <!DOCTYPE html>
			<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

			<head>
				<title></title>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css">
				<style>
					* {
						box-sizing: border-box;
						color: #1c1c1c !important;
					}
				
					body {
						margin: 0;
						padding: 0;
					}
				
					a[x-apple-data-detectors] {
						color: inherit !important;
						text-decoration: inherit !important;
					}
				
					#MessageViewBody a {
						color: inherit;
						text-decoration: none;
					}
				
					p {
						line-height: inherit
					}
				
					.desktop_hide,
					.desktop_hide table {
						mso-hide: all;
						display: none;
						max-height: 0px;
						overflow: hidden;
					}
				
					.image_block img+div {
						display: none;
					}
				
					@media (max-width:520px) {
						.desktop_hide table.icons-inner {
							display: inline-block !important;
						}
					
						.icons-inner {
							text-align: center;
						}
					
						.icons-inner td {
							margin: 0 auto;
						}
					
						.row-content {
							width: 100% !important;
						}
					
						.mobile_hide {
							display: none;
						}
					
						.stack .column {
							width: 100%;
							display: block;
						}
					
						.mobile_hide {
							min-height: 0;
							max-height: 0;
							max-width: 0;
							overflow: hidden;
							font-size: 0px;
						}
					
						.desktop_hide,
						.desktop_hide table {
							display: table !important;
							max-height: none !important;
						}
					}
				</style>
			</head>
				
			<body style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
				<table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;">
					<tbody>
						<tr>
							<td>
								<table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
									<tbody>
										<tr>
											<td>
												<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #1C1C1C; width: 500px;" width="500">
													<tbody>
														<tr>
															<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
																<table class="heading_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																	<tr>
																		<td class="pad" style="text-align:center;width:100%;">
																			<h1 style="margin: 0; color: #555555 !important; direction: ltr; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 23px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">✨ Usuario creado exitosamente ✨</span></h1>
																		</td>
																	</tr>
																</table>
																<table class="divider_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																	<tr>
																		<td class="pad">
																			<div class="alignment" align="center">
																				<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																					<tr>
																						<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #BBBBBB;"><span>&#8202;</span></td>
																					</tr>
																				</table>
																			</div>
																		</td>
																	</tr>
																</table>
																<table class="paragraph_block block-3" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
																	<tr>
																		<td class="pad">
																			<div style="color:#1C1C1C;direction:ltr;font-family:'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:justify;mso-line-height-alt:16.8px;">
																				<p style="margin: 0; margin-bottom: 16px;">Estimado/a ${user.first_name} ${user.last_name},</p>
																				<p style="margin: 0;">Es un placer informarle que se ha creado su cuenta de usuario satisfactoriamente. En nombre de ${app.API.name}, le damos la bienvenida a nuestra comunidad y agradecemos su interés en nuestros servicios.</p>
																			</div>
																		</td>
																	</tr>
																</table>
																<table class="divider_block block-4" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																	<tr>
																		<td class="pad">
																			<div class="alignment" align="center">
																				<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																					<tr>
																						<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #BBBBBB;"><span>&#8202;</span></td>
																					</tr>
																				</table>
																			</div>
																		</td>
																	</tr>
																</table>
																<table class="paragraph_block block-5" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
																	<tr>
																		<td class="pad">
																			<div style="color:#1C1C1C;direction:ltr;font-family:'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:16.8px;">
																				<p style="margin: 0; margin-bottom: 16px;"><strong>Sus datos de acceso son los siguientes:</strong></p>
																				<p style="margin: 0; margin-bottom: 16px;"><strong>Nombre de usuario</strong>: ${user.email}</p>
																				<p style="margin: 0;"><strong>Contraseña:</strong> ${user.password}</p>
																			</div>
																		</td>
																	</tr>
																</table>
																<table class="paragraph_block block-6" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
																	<tr>
																		<td class="pad">
																			<div style="color:#1C1C1C;direction:ltr;font-family:'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:16.8px;">
																				<p style="margin: 0;"><strong>Role:</strong> ${user.role}</p>
																			</div>
																		</td>
																	</tr>
																</table>
																<table class="divider_block block-7" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																	<tr>
																		<td class="pad">
																			<div class="alignment" align="center">
																				<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																					<tr>
																						<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #BBBBBB;"><span>&#8202;</span></td>
																					</tr>
																				</table>
																			</div>
																		</td>
																	</tr>
																</table>
																<table class="paragraph_block block-8" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
																	<tr>
																		<td class="pad">
																			<div style="color:#1C1C1C;direction:ltr;font-family:'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:justify;mso-line-height-alt:16.8px;">
																				<p style="margin: 0; margin-bottom: 16px;">Con estos datos, podrá acceder a ${app.API.api} y comenzar a disfrutar de todas las funcionalidades que ofrecemos. Le recomendamos cambiar su contraseña inicial por una de su elección para mayor seguridad. Para ello, siga las instrucciones de cambio de contraseña que encontrará al iniciar sesión por primera vez.</p>
																				<p style="margin: 0; margin-bottom: 16px;">En caso de tener alguna pregunta, duda o requerir asistencia, no dude en contactarnos a través de <strong>${app.API.email}</strong>. Nuestro equipo de soporte estará encantado de ayudarle en todo lo que necesite.</p>
																				<p style="margin: 0; margin-bottom: 16px;">Aprovechamos esta oportunidad para recordarle que el uso de su cuenta está sujeto a nuestros términos y condiciones, los cuales puede revisar en ${app.API.info}.</p>
																				<p style="margin: 0;">Agradecemos nuevamente su confianza en ${app.API.name} y esperamos que su experiencia sea satisfactoria. Estamos comprometidos a brindarle el mejor servicio posible.</p>
																			</div>
																		</td>
																	</tr>
																</table>
																<table class="divider_block block-9" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																	<tr>
																		<td class="pad">
																			<div class="alignment" align="center">
																				<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																					<tr>
																						<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #BBBBBB;"><span>&#8202;</span></td>
																					</tr>
																				</table>
																			</div>
																		</td>
																	</tr>
																</table>
																<table class="paragraph_block block-10" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
																	<tr>
																		<td class="pad">
																			<div style="color:#1C1C1C;direction:ltr;font-family:'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:16.8px;">
																				<p style="margin: 0; margin-bottom: 16px;"><strong>¡Bienvenido/a a ${app.API.name} ✨!</strong></p>
																				<p style="margin: 0; margin-bottom: 16px;"><strong>Atentamente</strong>,</p>
																				<p style="margin: 0;"><strong>${app.API.name} ${app.API.email}</strong></p>
																			</div>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
					</tbody>
				</table>
			</body>
				
		</html>
        `;
  },
};
