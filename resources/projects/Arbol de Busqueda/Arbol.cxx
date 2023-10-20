#include<iostream>
#include<conio.h>
using namespace std;

struct Nodo{
	int dato;
	Nodo *izq;
	Nodo *der;
	Nodo *padre;
};

//Prototipos de Funciones
void menu();
Nodo *crearNodo(int,Nodo *);
void agregarNodo(Nodo *&,int,Nodo *);
void mostrarArbol(Nodo *,int);
bool buscarNodo(Nodo *,int);
void preOrden(Nodo *);
void inOrden(Nodo *);
void postOrden(Nodo *);
//Funciones para eliminar
void eliminar(Nodo *,int );
void eliminarNodo(Nodo *);
Nodo *menor(Nodo *);
void reemplazar(Nodo *,Nodo *);
void destruirNodo(Nodo *);

//Datos Globales
int dato,cont=0;
Nodo *arbol=NULL;

int main(){
	
	menu();

	getch();
	return 0;
}

void menu(){
	int op;
	
	do{
		cout<<"\t.:MENU:.\n";
		cout<<"1.Agregar Dato al Arbol";
		cout<<"\n2.Mostrar Arbol";
		cout<<"\n3.Buscar Dato";
		cout<<"\n4.Recorrer Arbol en PreOrden";
		cout<<"\n5.Recorrer Arbol en InOrden";
		cout<<"\n6.Recorrer Arbol en PostOrden";
		cout<<"\n7.Eliminar Dato";
		cout<<"\n8.Salir";
		cout<<"\n\nOpcion:";cin>>op;
		
		switch(op){
			case 1:
			cout<<"Digite un numero:";
			cin>>dato;
			agregarNodo(arbol,dato,NULL);
			break;
			
			case 2:
			cout<<"\n.:Mostrando Arbol:.\n\n";
			mostrarArbol(arbol,cont);
			fflush(stdin);
			getch();
			break;
			
			case 3:
			cout<<"Digite el numero a buscar:";
			cin>>dato;
			if(buscarNodo(arbol,dato)==true){
				cout<<"\nElemento encontrado";
			}else{
				cout<<"\nElemento NO encontrado";
			}
			fflush(stdin);
			getch();
			break;
			
			case 4:
			cout<<endl<<"Recorrido en PreOrden: ";
			preOrden(arbol);
			fflush(stdin);
			getch();
			break;
			
			case 5:
			cout<<"\nRecorrido en InOrden: ";
			inOrden(arbol);
			fflush(stdin);
			getch();
			break;
			
			case 6:
			cout<<"\nRecorrido en PostOrden: ";
			postOrden(arbol);
			fflush(stdin);
			getch();
			break;
			
			case 7:
			cout<<"\nDigite el numero a eliminar:";
			cin>>dato;
			eliminar(arbol,dato);
			fflush(stdin);
			break;
		}
		system("cls");
	}while(op != 8 );
}

//Crear Nodo
Nodo *crearNodo(int n,Nodo *padre){
	Nodo *nuevo_nodo = new Nodo();
    nuevo_nodo->dato=n;
    nuevo_nodo->der=NULL;
    nuevo_nodo->izq=NULL;
    nuevo_nodo->padre=padre;
    
		return nuevo_nodo;
}

//Insertar Dato en el Arbol
void agregarNodo(Nodo *&arbol,int n,Nodo *padre){
	if(arbol==NULL){
		Nodo *nuevo_nodo=crearNodo(n,padre);
		arbol=nuevo_nodo;
	}
	else{
		int valorRaiz=arbol->dato;
		if(n<valorRaiz){
			agregarNodo(arbol->izq,n,arbol);
		}else{
			agregarNodo(arbol->der,n,arbol);
		}
	}
}

//Mostrar el Arbol
void mostrarArbol(Nodo *arbol,int cont){
	if(arbol==NULL){
		return;
	}
	else{
		mostrarArbol(arbol->der,cont+1);
		for(int i=0;i<cont;i++){
		cout<<"   ";
		}
		cout<<arbol->dato<<endl;
		mostrarArbol(arbol->izq,cont+1);
	}
}

//Buscar dato en Arbol
bool buscarNodo(Nodo *arbol,int n){
	if(arbol==NULL){
		return false;
	}
	else if(arbol->dato == n){
		return true;
	}
	else if(arbol->dato > n){
		return buscarNodo(arbol->izq,n);
	}
	else{
		return buscarNodo(arbol->der,n);
	}
}

//Mostrar Arbol en PreOrden
void preOrden(Nodo *arbol){
	if(arbol==NULL){
		return;
	}
	else{
		cout<<arbol->dato<<" - ";
		preOrden(arbol->izq);
		preOrden(arbol->der);
	}
}

//Mostrar Arbol en InOrden
void inOrden(Nodo *arbol){
	if(arbol==NULL){
		return;
	}
	else{
		inOrden(arbol->izq);
		cout<<arbol->dato<<" - ";
		inOrden(arbol->der);
	}
}

//Mostrar Arbol en PostOrden
void postOrden(Nodo *arbol){
	if(arbol==NULL){
		return;
	}
	else{
		postOrden(arbol->izq);
		postOrden(arbol->der);
		cout<<arbol->dato<<" - ";
	}
}

//Funcion para Recorrer Nodo
void eliminar(Nodo *arbol,int n){
	if(arbol==NULL){
		return;
	}
	else if(n < arbol->dato){
		eliminar(arbol->izq,n);
	}
	else if(n > arbol->dato){
		eliminar(arbol->der,n);
	}
	else{
		eliminarNodo(arbol);
	}
}

//Eliminar Nodo
void eliminarNodo(Nodo *eliminar){
	//Si tiene 2Hijos
	if(eliminar->izq && eliminar->der){
		Nodo *minimo = menor(eliminar->der);
		eliminar->dato = minimo->dato;
		eliminarNodo(minimo);
	}
	//Si tiene hijo izq
	else if(eliminar->izq){
		reemplazar(eliminar,eliminar->izq);
		destruirNodo(eliminar);
	}
	//Si tiene hijo der
	else if(eliminar->der){
		reemplazar(eliminar,eliminar->der);
		destruirNodo(eliminar);
	}
	//Si no tiene hijo
	else{
		reemplazar(eliminar,NULL);
		destruirNodo(eliminar);
	}
	
}

//Hallar la mayor izquierda
Nodo *menor(Nodo *arbol){
	if(arbol== NULL){
		return NULL;
	}
	else if(arbol->izq){
		return menor(arbol->izq);
	}
	else{
		return arbol;
	}
}

//Reemplazar Datos 
void reemplazar(Nodo *arbol,Nodo *nuevo){
	if(arbol->padre){//Si tiene padre
	
	//Si el arbol esta a la izq del padre
		if(arbol->dato == arbol->padre->izq->dato){
			arbol->padre->izq=nuevo;
		}
	//Si el arbol esta a la der del Padre
	else if(arbol->dato == arbol->padre->der->dato){
		arbol->padre->der = nuevo;	
	}
	//Asiganrle padre al nuevo
	if(nuevo){
		nuevo->padre=arbol->padre;
	}	
}
//si no tiene padre
else {
	
}
}

//Eliminar el Nodo aislado
void destruirNodo(Nodo *nodo){
	nodo->izq = NULL;
	nodo->der = NULL;
	
	delete nodo;
}