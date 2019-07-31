import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Empleado, Producto, Mascota, Medicina, Sucursal } from '../interfaces/interfaces';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  //EMPLEADO
  traerEmpleados() {
    return this.traerEmpleadosAPI(`empleado`);
  }
  traerEmpleadosAPI(query: string) {
    query = apiUrl + query;
    return this.http.get<Empleado>(query);
  }
  agregarEmpleado(nombre: string, cel: string, correo: string, puesto: string) {
    return this.agregarEmpleadoAPI(`empleado?nombre=` + nombre + `&cel=` + cel + `&correo=` + correo + `&puesto=` + puesto);
  }
  agregarEmpleadoAPI(query: string) {
    query = apiUrl + query;
    return this.http.post<Empleado>(query, {  });
  }
  editarEmpleado(id: number, nombre: string, cel: string, correo: string, puesto: string) {
    return this.editarEmpleadoAPI(`empleado/` + id + `?nombre=` + nombre + `&cel=` + cel + `&correo=` + correo + `&puesto=` + puesto);
  }
  editarEmpleadoAPI(query: string) {
    query = apiUrl + query;
    return this.http.put<Empleado>(query, {});
  }
  eliminarEmpleado(query: number) {
    return this.eliminarEmpleadoAPI(`empleado/` + query);
  }
  eliminarEmpleadoAPI(query: string) {
    query = apiUrl + query;
    return this.http.delete<Empleado>(query, { });
  }
  //PRODUCTO
  traerProductos() {
    return this.traerProductosAPI(`producto`);
  }
  traerProductosAPI(query: string) {
    query = apiUrl + query;
    return this.http.get<Producto>(query);
  }
  agregarProducto(nombre: string, descripcion: string, cantidad: string, costo: string) {
    return this.agregarProductoAPI(`producto?nombre=` + nombre + `&descripcion=` + descripcion + 
    `&cantidad=` + cantidad + `&costo=` + costo);
  }
  agregarProductoAPI(query: string) {
    query = apiUrl + query;
    return this.http.post<Producto>(query, { });
  }
  editarProducto(id: number, nombre: string, descripcion: string, cantidad: string, costo: string) {
    return this.editarProductoAPI(`producto/` + id + `?nombre=` + nombre + `&descripcion=` + 
    descripcion + `&cantidad=` + cantidad + `&costo=` + costo);
  }
  editarProductoAPI(query: string) {
    query = apiUrl + query;
    return this.http.put<Producto>(query, {});
  }
  eliminarProducto(query: number) {
    return this.eliminarProductoAPI(`producto/` + query);
  }
  eliminarProductoAPI(query: string) {
    query = apiUrl + query;
    return this.http.delete<Producto>(query, { });
  }
  //MEDICINA
  traerMedicinas() {
    return this.traerMedicinasAPI(`medicina`);
  }
  traerMedicinasAPI(query: string) {
    query = apiUrl + query;
    return this.http.get<Medicina>(query);
  }
  agregarMedicina(nombre: string, descripcion: string, cantidad: string, costo: string) {
    return this.agregarMedicinaAPI(`medicina?nombre=` + nombre + `&descripcion=` + descripcion + 
    `&cantidad=` + cantidad + `&costo=` + costo);
  }
  agregarMedicinaAPI(query: string) {
    query = apiUrl + query;
    return this.http.post<Medicina>(query, { });
  }
  editarMedicina(id: number, nombre: string, descripcion: string, cantidad: string, costo: string) {
    return this.editarMedicinaAPI(`medicina/` + id + `?nombre=` + nombre + `&descripcion=` + descripcion + 
    `&cantidad=` + cantidad + `&costo=` + costo);
  }
  editarMedicinaAPI(query: string) {
    query = apiUrl + query;
    return this.http.put<Medicina>(query, {});
  }
  eliminarMedicina(query: number) {
    return this.eliminarMedicinaAPI(`medicina/` + query);
  }
  eliminarMedicinaAPI(query: string) {
    query = apiUrl + query;
    return this.http.delete<Medicina>(query, { });
  }
  //MASCOTAS
  traerMascotas() {
    return this.traerMascotasAPI(`mascota`);
  }
  traerMascotasAPI(query: string) {
    query = apiUrl + query;
    return this.http.get<Mascota>(query);
  }
  agregarMascota(nombre: string, cel: string, mascota: string, raza: string, color: string) {
    return this.agregarMascotaAPI(`mascota?nombre=` + nombre + `&cel=` + cel + `&mascota=` + mascota + `&raza=` + raza + `&color=` + color);
  }
  agregarMascotaAPI(query: string) {
    query = apiUrl + query;
    return this.http.post<Mascota>(query, { });
  }
  editarMascota(id: number, nombre: string, cel: string, mascota: string, raza: string, color: string) {
    return this.editarMascotaAPI(`mascota/` + id + `?nombre=` + nombre + `&cel=` + cel + `&mascota=` + mascota + `&raza=` + raza +
     `&color=` + color);
  }
  editarMascotaAPI(query: string) {
    query = apiUrl + query;
    return this.http.put<Mascota>(query, {});
  }
  eliminarMascota(query: number) {
    return this.eliminarMascotaAPI(`mascota/` + query);
  }
  eliminarMascotaAPI(query: string) {
    query = apiUrl + query;
    return this.http.delete<Sucursal>(query, { });
  }
  //SUCURSALES
  traerSucursales() {
    return this.traerSucursalesAPI(`sucursal`);
  }
  traerSucursalesAPI(query: string) {
    query = apiUrl + query;
    return this.http.get<Sucursal>(query);
  }
  agregarSucursal(nombre: string, estado: string, direccion: string, gerente: string, cel: string) {
    return this.agregarSucursalAPI(`sucursal?nombre=` + nombre + `&estado=` + estado + `&direccion=` + direccion 
    + `&gerente=` + gerente + `&cel=` + cel);
  }
  agregarSucursalAPI(query: string) {
    query = apiUrl + query;
    return this.http.post<Sucursal>(query, { });
  }
  editarSucursal(id: number, nombre: string, estado: string, direccion: string, gerente: string, cel: string) {
    return this.editarSucursalAPI(`sucursal/` + id + `?nombre=` + nombre + `&estado=` + estado + `&direccion=` + direccion 
    + `&gerente=` + gerente + `&cel=` + cel);
  }
  editarSucursalAPI(query: string) {
    query = apiUrl + query;
    return this.http.put<Sucursal>(query, {});
  }
  eliminarSucursal(query: number) {
    return this.eliminarSucursalAPI(`sucursal/` + query);
  }
  eliminarSucursalAPI(query: string) {
    query = apiUrl + query;
    return this.http.delete<Sucursal>(query, { });
  }
}
