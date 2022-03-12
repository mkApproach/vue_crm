<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;

class RoleBaseController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    /*
    public function __invoke(Request $request)
    {
        $roles = \App\Models\Role::get(); // 役職一覧を取得
        return view('roles.index', compact('roles'));  // $roles一覧情報を渡して roles./index.blade.phpを呼びます
    }
    */
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $roles = \App\Models\Role::get(); // 役職一覧を取得
        return view('rolebases.index', compact('roles'));  // $roles一覧情報を渡して roles./index.blade.phpを呼びます  
     }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('roles.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $attribute = request()->validate([
        'name' => ['required', 'min:3', 'max:32'],
        'memo' => ['required',],
        ]);
        $role = Role::create($attribute);
        return redirect('/rolebases');
    }

    public function json($id = -1)
    {
        if ($id == -1)
        {
            return \App\Models\Role::get()->toJson();
        }
        else
        {
            return Role::find($id)->toJson();
        }
    }

    public function read()
    {
        $data = \App\Models\Role::get();
        return $data;
    }

}
